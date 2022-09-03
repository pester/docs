import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Improved Code Confidence',
    imageUrl: 'img/features/expertise-symbol-tdd.svg',
    imagePosition: 'left',
    description: (
      <>
        Adding Pester tests to Powershell code will enhance code quality and allows you to start creating
        predictable changes.
      </>
    ),
  },
  {
    title: 'Optimized Development',
    imageUrl: 'img/features/visual-studio-code.svg',
    imagePosition: 'right',
    description: <>Visual Studio Code comes with full support for Pester allowing you to create tests quick.</>,
  },
  {
    title: 'Build Server Integration',
    imageUrl: 'img/features/cicd.svg',
    imagePosition: 'left',
    description: (
      <>
        Pester integrates nicely with TFS, Azure, Github, Jenkins and other CI servers,
        allowing you to fully automate your development lifecycle.
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
        className={classnames('col col--5 padding-vert--xl', styles.featureDescCol, {
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
      description="Pester is the ubiquitous test and mock framework for PowerShell">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className={classnames('container', styles.container)}>
          <div className="row">
            <div className={classnames('col col--9', styles.heroContent)}>
              <h1 className="hero__title">The test framework for Powershell</h1>
              <p className="hero__subtitle">Pester is the ubiquitous test and mock framework for PowerShell</p>

              <div className={styles.buttons}>
                <Link
                  className={classnames('button button--secondary button--lg', styles.getStarted)}
                  to={useBaseUrl('docs/quick-start')}>
                  Get Started
                </Link>
              </div>
            </div>

            <div className={classnames('col text--center', styles.heroLogo)}>
              <img alt="" src={logo} />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className={classnames('container', styles.container)}>
          {features && features.length && (
            <section className={styles.features}>
              <div className={classnames('container', styles.container)}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </section>
          )}

          <section className={classnames(styles.openCollective, 'padding-vert--lg padding-horiz--md')}>
            <h2>Meet Our Sponsors</h2>

            <p>Pester is sponsored by all the great folks on OpenCollective, GitHub and the DevOps Collective.</p>

            <p>Become a financial contributor and help us sustain our community.</p>

            <div className="backers-section">
              <h3>Individual Backers</h3>

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
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
