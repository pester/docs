import React from 'react';
import OriginalDocItemLayout from '@theme-original/DocItem/Layout';
import useRouteContext from '@docusaurus/useRouteContext';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import TutorialTracker from '@site/src/components/TutorialTracker';
import { TUTORIAL_PLUGIN_ID } from '@site/src/tutorial/tutorialData';

/**
 * Fallback so a tutorial page always shows the progress tracker.
 *
 * The tracker normally replaces the table of contents (see the DocItem/TOC wrappers), but
 * DocItem/Layout only renders either TOC when the page has headings and does not set
 * `hide_table_of_contents`. Without this, a heading-less tutorial page would silently lose
 * the tracker altogether. In that case only, render it above the content instead.
 *
 * Every tutorial page currently has headings, so this path is not normally taken.
 *
 * Note: this is an unsafe swizzle. It only prepends a sibling and forwards props unchanged,
 * so the blast radius is small, but re-check it when @docusaurus/theme-classic is upgraded.
 */
export default function DocItemLayoutWrapper(props) {
  const { plugin } = useRouteContext();
  const { metadata, frontMatter, toc } = useDoc();

  const isTutorial =
    plugin?.name === 'docusaurus-plugin-content-docs' && plugin?.id === TUTORIAL_PLUGIN_ID;
  const tocWillRender = !frontMatter.hide_table_of_contents && toc.length > 0;

  if (!isTutorial || tocWillRender) {
    return <OriginalDocItemLayout {...props} />;
  }

  return (
    <>
      <TutorialTracker currentPageId={metadata.id} variant="mobile" />
      <OriginalDocItemLayout {...props} />
    </>
  );
}
