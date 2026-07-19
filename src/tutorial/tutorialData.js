/**
 * The tutorial structure is NOT declared here.
 *
 * Modules and pages are derived at runtime from the generated sidebar — categories become
 * modules, doc links become pages, and their labels are the page titles. See
 * src/tutorial/useTutorialOutline.js. That keeps the sidebar the single source of truth, so
 * adding a page means adding a file and nothing else.
 *
 * Only what the sidebar cannot express lives here.
 */

export const TUTORIAL_PLUGIN_ID = 'tutorial';

/**
 * Modules that are planned but not written yet.
 *
 * These have no docs, so they cannot come from the sidebar. They are shown in the tracker,
 * greyed out and not linkable, so the shape of the whole tutorial is visible up front. Delete
 * an entry when its module is written — the sidebar will pick it up automatically.
 */
export const upcomingModules = [
  { id: 'mocking', label: 'Mocking' },
  { id: 'testdrive', label: 'Working with files' },
  { id: 'code-coverage', label: 'Code coverage' },
  { id: 'ci', label: 'Setting up CI' },
];
