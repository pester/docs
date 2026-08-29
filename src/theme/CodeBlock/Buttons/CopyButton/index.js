import React from 'react';
import CopyButton from '@theme-original/CodeBlock/Buttons/CopyButton';
import {
  CodeBlockContextProvider,
  useCodeBlockContext,
} from '@docusaurus/theme-common/internal';

// Set by the diff-remove magic comment declared in docusaurus.config.js.
const DIFF_REMOVE_CLASS = 'code-block-diff-remove-line';

/**
 * Drops the lines marked with `diff-remove` from the copied text.
 *
 * A diff block shows the old line in red and the new line in green. The `-` and `+`
 * glyphs come from CSS `::before` in custom.css, and pseudo-element content is not part
 * of the DOM, so without this the copy button hands you the old line and the new line
 * with nothing to tell them apart. The tutorial evolves the same file over several pages,
 * so that is a broken file rather than a cosmetic problem.
 *
 * Rendering is untouched. The removed lines stay on the page, they just do not travel
 * to the clipboard.
 */
function withoutRemovedLines(metadata) {
  const removed = Object.entries(metadata.lineClassNames)
    .filter(([, classNames]) => classNames.includes(DIFF_REMOVE_CLASS))
    .map(([lineIndex]) => Number(lineIndex));

  if (removed.length === 0) {
    return metadata;
  }

  const removedLines = new Set(removed);
  const code = metadata.code
    .split('\n')
    .filter((_, lineIndex) => !removedLines.has(lineIndex))
    .join('\n');

  return {...metadata, code};
}

export default function CopyButtonWrapper(props) {
  const {metadata, wordWrap} = useCodeBlockContext();
  const copyMetadata = withoutRemovedLines(metadata);

  if (copyMetadata === metadata) {
    return <CopyButton {...props} />;
  }

  // Re-provide the context so only the copy button sees the trimmed code.
  return (
    <CodeBlockContextProvider metadata={copyMetadata} wordWrap={wordWrap}>
      <CopyButton {...props} />
    </CodeBlockContextProvider>
  );
}
