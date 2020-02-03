import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    imagePosition: 'left',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your website up and running
        quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    imagePosition: 'right',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the{' '}
        <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    imagePosition: 'left',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same
        header and footer.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    imagePosition: 'right',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the{' '}
        <code>docs</code> directory.
      </>
    ),
  },
];

function Feature({ imagePosition, imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className="row">
      <div
        className={classnames('col col--5', {
          [styles.featureImageSecond]: imagePosition === 'right',
          'col--offset-2': imagePosition === 'right',
        })}>
        <div className={styles.featureImage}>
          <img src={imgUrl} alt={title} />
        </div>
      </div>

      <div
        className={classnames('col col--5 padding-vert--xl', {
          'col--offset-2': imagePosition === 'left',
        })}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const logo = useBaseUrl(siteConfig.themeConfig.navbar.logo.src);

  return (
    <Layout
      title={`${siteConfig.title} - The ubiquitous test and mock framework for PowerShell`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--9">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>

              <div className={styles.buttons}>
                <Link
                  className={classnames('button button--secondary button--lg', styles.getStarted)}
                  to={useBaseUrl('docs/quick-start')}>
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col text--center">
              <img alt="" src={logo} width="55%" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          {features && features.length && (
            <section className={styles.features}>
              <div className="container">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </section>
          )}

          <section className={classnames(styles.openCollective, 'padding-vert--lg padding-horiz--md')}>
            <h2>Support us on Open Collective!</h2>

            <p>
              Open Collective is an initiative that allows community members an easy and transparent way to donate to
              open source projects. <br />
            </p>

            <div className="backers-section">
              <h3>Individuals</h3>

              <a href="https://opencollective.com/pester#backers" target="_blank">
                <img src="https://opencollective.com/pester/backers.svg?width=695" />
              </a>
            </div>

            <div className="backers-section">
              <h3>Organizations</h3>

              <a href="https://opencollective.com/pester#sponsors" target="_blank">
                <img src="https://opencollective.com/pester/sponsors.svg" />
              </a>
            </div>

            <br />

            <a href="https://opencollective.com/pester/donate" target="_blank" rel="nofollow noopener noreferrer">
              <img alt="open-collective" src="https://opencollective.com/pester/contribute/button.png?color=blue" />
            </a>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
