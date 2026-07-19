import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { getPageIndex } from '@site/src/tutorial/tutorialData';
import { useTutorialOutline } from '@site/src/tutorial/useTutorialOutline';
import styles from './styles.module.css';

function CheckIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path
        d="M13 4.5 6.5 11 3 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function warnUnknownPage(currentPageId) {
  if (process.env.NODE_ENV === 'development' && currentPageId && !getPageIndex().has(currentPageId)) {
    console.warn(
      `[TutorialTracker] Page "${currentPageId}" is not listed in src/tutorial/tutorialData.js, ` +
        'so its progress will not be tracked. Add it to the matching module.',
    );
  }
}

export default function TutorialTracker({ currentPageId }) {
  const { hydrated, modules, currentModule, totalPages, totalDone, percent } =
    useTutorialOutline(currentPageId);

  warnUnknownPage(currentPageId);

  return (
    <aside className={styles.tracker} aria-label="Tutorial progress">
      <div className={styles.header}>
        <div className={styles.headerText}>
          <span className={styles.eyebrow}>Tutorial progress</span>
          {/* Before hydration we have no stored progress, so show a placeholder rather than
              a confidently wrong "0 of 12". */}
          <strong className={styles.count} aria-busy={!hydrated}>
            {hydrated ? `${totalDone} of ${totalPages} pages complete` : `${totalPages} pages`}
          </strong>
        </div>
        <span className={styles.percent} aria-hidden={!hydrated}>
          {hydrated ? `${percent}%` : ''}
        </span>
      </div>

      <div
        className={styles.bar}
        role="progressbar"
        aria-valuenow={hydrated ? totalDone : 0}
        aria-valuemin={0}
        aria-valuemax={totalPages}
        aria-label="Overall tutorial progress"
      >
        <div className={styles.barFill} style={{ width: hydrated ? `${percent}%` : '0%' }} />
      </div>

      <details className={styles.modules}>
        <summary className={styles.summary}>
          <span className={styles.summaryLabel}>
            {currentModule ? currentModule.label : 'All modules'}
          </span>
          <span className={styles.summaryHint}>All modules</span>
        </summary>
        <ul className={styles.moduleList}>
          {modules.map((module) => (
            <li key={module.id} className={styles.moduleItem}>
              <span className={clsx(styles.moduleLabel, module.isCurrent && styles.moduleLabelCurrent)}>
                {module.label}
              </span>
              {module.upcoming ? (
                <span className={styles.badge}>Coming soon</span>
              ) : (
                <span className={styles.moduleCount}>
                  {hydrated ? `${module.done}/${module.total}` : `${module.total}`}
                </span>
              )}
            </li>
          ))}
        </ul>
      </details>

      {currentModule && (
        <ol className={styles.pageList}>
          {currentModule.pages.map((page) => (
            <li key={page.id}>
              <Link
                to={page.permalink}
                className={clsx(styles.pageLink, page.isCurrent && styles.pageLinkCurrent)}
                aria-current={page.isCurrent ? 'page' : undefined}
              >
                <span className={clsx(styles.marker, page.done && styles.markerDone)} aria-hidden="true">
                  {page.done && <CheckIcon />}
                </span>
                <span className={styles.pageTitle}>{page.title}</span>
                {page.done && <span className={styles.srOnly}>(complete)</span>}
              </Link>
            </li>
          ))}
        </ol>
      )}
    </aside>
  );
}
