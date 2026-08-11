import React from 'react';
import OriginalDocItemTOCMobile from '@theme-original/DocItem/TOC/Mobile';
import useRouteContext from '@docusaurus/useRouteContext';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import TutorialTracker from '@site/src/components/TutorialTracker';
import { TUTORIAL_PLUGIN_ID } from '@site/src/tutorial/tutorialData';

/**
 * Mobile counterpart of the desktop TOC replacement. Both variants are always in the DOM —
 * CSS decides which is visible — so the mobile one renders its headings without active-link
 * tracking to avoid two components competing over the same highlight classes.
 *
 * Note: this is an unsafe swizzle. Check it when @docusaurus/theme-classic is upgraded.
 */
export default function DocItemTOCMobileWrapper(props) {
  const { plugin } = useRouteContext();
  const { metadata } = useDoc();

  const isTutorial =
    plugin?.name === 'docusaurus-plugin-content-docs' && plugin?.id === TUTORIAL_PLUGIN_ID;

  if (!isTutorial) {
    return <OriginalDocItemTOCMobile {...props} />;
  }

  return <TutorialTracker currentPageId={metadata.id} variant="mobile" />;
}
