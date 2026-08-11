import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/**
 * Tutorial progress, persisted to localStorage.
 *
 * The version lives in both the storage key and a `version` field. Bumping the key is the
 * escape hatch for a breaking rewrite (old data is orphaned and ignored); the field lets us
 * migrate in place for additive changes.
 *
 * Only per-page checkbox booleans are stored. Module and overall totals are always derived
 * from tutorialData at render time, so restructuring the tutorial can never desync progress.
 *
 * Shape:
 *   { version: 1, updatedAt: 0, pages: { "<pageId>": { items: {"<itemId>": true}, completedAt: null } } }
 */
const STORAGE_KEY = 'pester.tutorial.progress.v1';
const SCHEMA_VERSION = 1;

const EMPTY_PAGES = {};

const TutorialProgressContext = createContext(null);

/** Coerce whatever is in storage into a valid `pages` object. Never throws. */
function migrate(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return EMPTY_PAGES;
  }
  if (raw.version !== SCHEMA_VERSION) {
    // Unknown or older schema. Progress is non-critical, so discard rather than guess.
    return EMPTY_PAGES;
  }
  const { pages } = raw;
  if (!pages || typeof pages !== 'object' || Array.isArray(pages)) {
    return EMPTY_PAGES;
  }
  return pages;
}

function readStorage() {
  try {
    return migrate(JSON.parse(window.localStorage.getItem(STORAGE_KEY)));
  } catch {
    // Missing key, invalid JSON, or blocked storage access.
    return EMPTY_PAGES;
  }
}

function writeStorage(pages) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: SCHEMA_VERSION, updatedAt: Date.now(), pages }),
    );
  } catch {
    // Safari private mode throws on write, and quota can be exhausted. In-memory state
    // still works for this session, so a failed write must not break the page.
  }
}

export function TutorialProgressProvider({ children }) {
  // Starts empty so the first client render matches the prerendered HTML exactly. The
  // effect below fills in the real value after mount, which is a normal update, not a
  // hydration mismatch.
  const [pages, setPages] = useState(EMPTY_PAGES);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setPages(readStorage());
    setHydrated(true);

    // Keep multiple open tabs in sync.
    const onStorage = (event) => {
      if (event.key === STORAGE_KEY) {
        setPages(readStorage());
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const setItemChecked = useCallback((pageId, itemId, checked, allItemIds) => {
    setPages((prev) => {
      const page = prev[pageId] ?? { items: {}, completedAt: null };
      const items = { ...page.items, [itemId]: checked };
      const complete = allItemIds.length > 0 && allItemIds.every((id) => items[id] === true);
      const next = {
        ...prev,
        // Preserve the original completedAt so re-checking a box doesn't reset the date.
        [pageId]: { items, completedAt: complete ? (page.completedAt ?? Date.now()) : null },
      };
      writeStorage(next);
      return next;
    });
  }, []);

  const resetPage = useCallback((pageId) => {
    setPages((prev) => {
      if (!prev[pageId]) {
        return prev;
      }
      const next = { ...prev };
      delete next[pageId];
      writeStorage(next);
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setPages(EMPTY_PAGES);
    writeStorage(EMPTY_PAGES);
  }, []);

  const value = useMemo(
    () => ({ hydrated, pages, setItemChecked, resetPage, resetAll }),
    [hydrated, pages, setItemChecked, resetPage, resetAll],
  );

  return <TutorialProgressContext.Provider value={value}>{children}</TutorialProgressContext.Provider>;
}

/**
 * Access tutorial progress. Returns a safe inert value when used outside the provider so a
 * stray <TutorialChecklist> in a non-tutorial page renders instead of crashing the build.
 */
export function useTutorialProgress() {
  const context = useContext(TutorialProgressContext);
  if (!context) {
    return {
      hydrated: false,
      pages: EMPTY_PAGES,
      setItemChecked: () => {},
      resetPage: () => {},
      resetAll: () => {},
    };
  }
  return context;
}

/** True when every checklist item recorded for the page is checked. */
export function isPageComplete(pages, pageId) {
  return Boolean(pages[pageId]?.completedAt);
}
