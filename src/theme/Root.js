import React from 'react';
import { TutorialProgressProvider } from '@site/src/tutorial/TutorialProgressContext';

/**
 * Root is a Docusaurus extension point that wraps the entire app, above the router, and is
 * never unmounted on client-side navigation. That makes it the right place for the tutorial
 * progress provider: both the tracker (rendered by the DocItem/Layout wrapper) and the
 * checklist (rendered from MDX) are descendants, so they share state with no extra wiring.
 *
 * The provider is inert outside /tutorial — it holds state that nothing else reads.
 */
export default function Root({ children }) {
  return <TutorialProgressProvider>{children}</TutorialProgressProvider>;
}
