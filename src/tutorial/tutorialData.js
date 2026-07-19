/**
 * Single source of truth for the tutorial structure.
 *
 * Every `page.id` MUST match the Docusaurus doc id of the corresponding file in /tutorial
 * (which is the path relative to the tutorial folder, without the extension, unless the
 * page overrides it with an `id` in its frontmatter). A mismatch silently untracks the
 * page — TutorialTracker warns about this in development.
 *
 * Modules marked `upcoming: true` are rendered in the tracker but are not linkable and
 * do not count toward progress. Add their pages here as they are written.
 */

export const TUTORIAL_PLUGIN_ID = 'tutorial';
export const TUTORIAL_ROUTE_BASE = '/tutorial';

export const modules = [
  {
    id: 'introduction',
    label: 'Introduction',
    pages: [
      { id: 'introduction/welcome', title: 'Welcome' },
      { id: 'introduction/prerequisites', title: 'Prerequisites' },
    ],
  },
  {
    id: 'testing-our-module',
    label: 'Testing our module',
    pages: [
      { id: 'testing-our-module/setup', title: 'Creating the sample module' },
      { id: 'testing-our-module/first-test', title: 'Running your first test' },
      { id: 'testing-our-module/public-functions', title: 'Testing public functions' },
      { id: 'testing-our-module/private-functions', title: 'Testing private functions' },
      { id: 'testing-our-module/output', title: 'Output' },
    ],
  },
  { id: 'mocking', label: 'Mocking', upcoming: true, pages: [] },
  { id: 'testdrive', label: 'Working with files', upcoming: true, pages: [] },
  { id: 'code-coverage', label: 'Code coverage', upcoming: true, pages: [] },
  { id: 'ci', label: 'Setting up CI', upcoming: true, pages: [] },
];

/** Pages that count toward progress, i.e. everything in a module that is not `upcoming`. */
export const trackedModules = modules.filter((m) => !m.upcoming);

let pageIndex;

/**
 * Lazily built `Map<pageId, {module, moduleIndex, pageIndex}>` for locating the current page.
 * Built once — the data above is static.
 */
export function getPageIndex() {
  if (!pageIndex) {
    pageIndex = new Map();
    modules.forEach((module, moduleIndex) => {
      module.pages.forEach((page, pageIdx) => {
        pageIndex.set(page.id, { module, moduleIndex, pageIndex: pageIdx });
      });
    });
  }
  return pageIndex;
}

/** Flat list of every tracked page id, in tutorial order. */
export function getAllTrackedPageIds() {
  return trackedModules.flatMap((m) => m.pages.map((p) => p.id));
}
