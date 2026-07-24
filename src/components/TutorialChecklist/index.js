import React, { useMemo } from 'react';
import clsx from 'clsx';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useTutorialProgress } from '@site/src/tutorial/TutorialProgressContext';
import styles from './styles.module.css';

/**
 * End-of-page checklist. Checking every box marks the page complete in the tracker.
 *
 * Registered globally in src/theme/MDXComponents.js, so tutorial pages use it without an
 * import:
 *
 *   <TutorialChecklist items={[
 *     {id: 'create-module', label: 'I can scaffold a PowerShell module'},
 *   ]} />
 *
 * Item ids must be stable strings, never array indices — reordering the list must not
 * transfer a checkmark from one statement to another.
 */
export default function TutorialChecklist({ items, title = 'Before you move on' }) {
  const { metadata } = useDoc();
  const { pages, setItemChecked } = useTutorialProgress();

  const itemIds = useMemo(() => items.map((item) => item.id), [items]);
  const state = pages[metadata.id]?.items ?? {};
  const done = itemIds.filter((id) => state[id] === true).length;
  const complete = itemIds.length > 0 && done === itemIds.length;

  return (
    <section className={clsx(styles.checklist, complete && styles.checklistComplete)}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.count}>
          {done}/{itemIds.length}
        </span>
      </div>

      <ul className={styles.items}>
        {items.map((item) => {
          const checked = state[item.id] === true;
          return (
            <li key={item.id}>
              <label className={clsx(styles.item, checked && styles.itemChecked)}>
                <input
                  type="checkbox"
                  className={styles.input}
                  checked={checked}
                  onChange={(event) =>
                    setItemChecked(metadata.id, item.id, event.target.checked, itemIds)
                  }
                />
                <span>{item.label}</span>
              </label>
            </li>
          );
        })}
      </ul>

      {complete && <p className={styles.done}>Page complete. Your progress is saved in this browser.</p>}
    </section>
  );
}
