/**
 * Sidebar for the follow-along tutorial (docs plugin instance "tutorial", served at /tutorial).
 *
 * Keep this in sync with src/tutorial/tutorialData.js, which drives the progress tracker.
 *
 * Note: do not use `link: {type: 'generated-index'}` on these categories. Generated index
 * pages are not rendered through @theme/DocItem, so they would not show the progress tracker.
 * Use a real doc as the category link instead.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  tutorial: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: ['introduction/welcome', 'introduction/prerequisites'],
    },
    {
      type: 'category',
      label: 'Testing our module',
      collapsed: false,
      items: [
        'testing-our-module/setup',
        'testing-our-module/first-test',
        'testing-our-module/public-functions',
        'testing-our-module/private-functions',
        'testing-our-module/output',
      ],
    },
  ],
};
