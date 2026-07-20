import React from 'react';
import useRouteContext from '@docusaurus/useRouteContext';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { TUTORIAL_PLUGIN_ID } from '@site/src/tutorial/tutorialData';

/**
 * Note: this is an unsafe swizzle. It only adds a guard, so should be low risk,
 * but check it when @docusaurus/theme-classic is upgraded.
 */
export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const { plugin } = useRouteContext();

  // Only show version dropdown while browsing versioned docs (default plugin)
  if (plugin?.name === 'docusaurus-plugin-content-docs' && plugin?.id === 'default') {
    return (
      <>
        <DocsVersionDropdownNavbarItem {...props} />
      </>
    );
  }

  // Hide version dropdown everywhere else, ex. home page and unversioned tutorial plugin.
  return null;
}
