import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Same address as the landing page uses. The tutorial has no index page, and /tutorial only
// exists as a redirect in static/_redirects, so it would fail the broken-link check.
const TUTORIAL_URL = '/tutorial/introduction/welcome';

/**
 * Points a reader at the follow-along tutorial from inside a docs page.
 *
 * This started as a `:::tip` admonition on Quick Start. A green admonition reads as an
 * optional side note, and the link inside it is a word in a sentence rather than something
 * to click, so people looked straight past it (#452). This is the tutorial card from the
 * landing page, cut down to fit in the flow of a page.
 *
 * Registered globally in src/theme/MDXComponents.js, so pages use it without an import:
 *
 *   <TutorialCallout />
 */
export default function TutorialCallout({
  title = 'Prefer to learn by building?',
  children = 'This page is the fast tour. The tutorial is one worked example, told in order: an empty folder becomes a real module with tests next to every piece of it, code coverage and a CI run.',
}) {
  return (
    <aside className={styles.callout}>
      <div className={styles.body}>
        <span className={styles.eyebrow}>Seven modules, at your own pace</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{children}</p>
      </div>
      <Link className={clsx('button button--primary', styles.action)} to={TUTORIAL_URL}>
        Start the tutorial
      </Link>
    </aside>
  );
}
