import { useMemo } from 'react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { modules, TUTORIAL_ROUTE_BASE } from './tutorialData';
import { isPageComplete, useTutorialProgress } from './TutorialProgressContext';

/**
 * Combines the static tutorial structure with stored progress into everything the tracker
 * needs to render.
 *
 * Totals are derived here rather than persisted, so editing tutorialData.js can never leave
 * stored progress inconsistent. Upcoming modules have no pages and are excluded from totals.
 */
export function useTutorialOutline(currentPageId) {
  const { hydrated, pages } = useTutorialProgress();
  // useBaseUrlUtils rather than useBaseUrl, since we need to build many URLs in a loop and
  // hooks cannot be called inside one.
  const { withBaseUrl } = useBaseUrlUtils();

  return useMemo(() => {
    const outline = modules.map((module) => {
      const modulePages = module.pages.map((page) => ({
        ...page,
        permalink: withBaseUrl(`${TUTORIAL_ROUTE_BASE}/${page.id}`),
        done: isPageComplete(pages, page.id),
        isCurrent: page.id === currentPageId,
      }));

      return {
        id: module.id,
        label: module.label,
        upcoming: Boolean(module.upcoming),
        pages: modulePages,
        total: modulePages.length,
        done: modulePages.filter((p) => p.done).length,
        isCurrent: modulePages.some((p) => p.isCurrent),
      };
    });

    const tracked = outline.filter((m) => !m.upcoming);
    const totalPages = tracked.reduce((sum, m) => sum + m.total, 0);
    const totalDone = tracked.reduce((sum, m) => sum + m.done, 0);

    return {
      hydrated,
      modules: outline,
      currentModule: outline.find((m) => m.isCurrent) ?? null,
      totalPages,
      totalDone,
      percent: totalPages === 0 ? 0 : Math.round((totalDone / totalPages) * 100),
    };
  }, [hydrated, pages, currentPageId, withBaseUrl]);
}
