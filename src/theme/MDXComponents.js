import MDXComponents from '@theme-original/MDXComponents';
import TutorialChecklist from '@site/src/components/TutorialChecklist';

/**
 * Components registered here are available in every .mdx file without an import.
 * TutorialChecklist is used at the end of each tutorial page.
 */
export default {
  ...MDXComponents,
  TutorialChecklist,
};
