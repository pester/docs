import MDXComponents from '@theme-original/MDXComponents';
import TutorialChecklist from '@site/src/components/TutorialChecklist';
import TutorialCallout from '@site/src/components/TutorialCallout';

/**
 * Components registered here are available in every .mdx file without an import.
 * TutorialChecklist is used at the end of each tutorial page, TutorialCallout points
 * docs pages at the tutorial.
 */
export default {
  ...MDXComponents,
  TutorialChecklist,
  TutorialCallout,
};
