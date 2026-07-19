import React from 'react';
import OriginalDocItemLayout from '@theme-original/DocItem/Layout';
import useRouteContext from '@docusaurus/useRouteContext';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import TutorialTracker from '@site/src/components/TutorialTracker';
import { TUTORIAL_PLUGIN_ID } from '@site/src/tutorial/tutorialData';

/**
 * Renders the tutorial progress tracker above the content on /tutorial pages, so tutorial
 * pages do not each have to import it.
 *
 * DocItem/Layout is the right injection point: it renders exactly once per doc page and sits
 * inside DocProvider, so useDoc() gives us the current page id.
 *
 * The guard uses the plugin instance id rather than the pathname, which would break under a
 * non-root baseUrl or a different trailing-slash setting.
 *
 * Note: this is an unsafe swizzle. It only prepends a sibling and forwards props unchanged,
 * so the blast radius is small, but re-check it when @docusaurus/theme-classic is upgraded.
 */
export default function DocItemLayoutWrapper(props) {
  const { plugin } = useRouteContext();
  const { metadata } = useDoc();

  const isTutorial =
    plugin?.name === 'docusaurus-plugin-content-docs' && plugin?.id === TUTORIAL_PLUGIN_ID;

  if (!isTutorial) {
    return <OriginalDocItemLayout {...props} />;
  }

  return (
    <>
      <TutorialTracker currentPageId={metadata.id} />
      <OriginalDocItemLayout {...props} />
    </>
  );
}
