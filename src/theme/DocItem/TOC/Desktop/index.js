import React from 'react';
import OriginalDocItemTOCDesktop from '@theme-original/DocItem/TOC/Desktop';
import useRouteContext from '@docusaurus/useRouteContext';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import TutorialTracker from '@site/src/components/TutorialTracker';
import { TUTORIAL_PLUGIN_ID } from '@site/src/tutorial/tutorialData';

/**
 * On tutorial pages the progress tracker takes the place of the table of contents in the
 * right-hand column. The current page's headings are nested inside the tracker, so nothing
 * is lost — see src/components/TutorialTracker.
 *
 * Note: this is an unsafe swizzle. Check it when @docusaurus/theme-classic is upgraded.
 */
export default function DocItemTOCDesktopWrapper(props) {
  const { plugin } = useRouteContext();
  const { metadata } = useDoc();

  const isTutorial =
    plugin?.name === 'docusaurus-plugin-content-docs' && plugin?.id === TUTORIAL_PLUGIN_ID;

  if (!isTutorial) {
    return <OriginalDocItemTOCDesktop {...props} />;
  }

  return <TutorialTracker currentPageId={metadata.id} variant="desktop" />;
}
