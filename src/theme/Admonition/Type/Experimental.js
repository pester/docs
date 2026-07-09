import React from 'react';
import clsx from 'clsx';
import AdmonitionLayout from '@theme/Admonition/Layout';

// Custom "experimental" admonition used to flag features that are opt-in and
// may still change (e.g. parallel execution, global mocks). Rendered with a
// distinct purple palette defined in src/css/custom.css (.alert--experimental).
const infimaClassName = 'alert alert--experimental';

const defaultProps = {
  icon: (
    <span role="img" aria-label="Test tube">
      🧪
    </span>
  ),
  title: 'Experimental',
};

export default function AdmonitionTypeExperimental(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
