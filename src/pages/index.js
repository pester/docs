import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLayoutDoc } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

const GITHUB_URL = 'https://github.com/pester/pester';
const INSTALL_COMMAND = 'Install-Module Pester';

/* ------------------------------------------------------------------ icons */
const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const IconSyntax = () => (
  <svg {...iconProps}>
    <polyline points="8 7 3 12 8 17" />
    <polyline points="16 7 21 12 16 17" />
    <line x1="13.5" y1="5" x2="10.5" y2="19" />
  </svg>
);
const IconMock = () => (
  <svg {...iconProps}>
    <path d="M3 12a4 4 0 0 1 4-4h3v8H7a4 4 0 0 1-4-4Z" />
    <path d="M21 12a4 4 0 0 1-4 4h-3V8h3a4 4 0 0 1 4 4Z" />
    <path d="M10 9l4 6" />
  </svg>
);
const IconCoverage = () => (
  <svg {...iconProps}>
    <path d="M12 3l7 3v5c0 4.4-3 8.3-7 9-4-0.7-7-4.6-7-9V6l7-3Z" />
    <polyline points="9 12 11.5 14.5 16 9.5" />
  </svg>
);
const IconEverywhere = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.7 3 2.7 15 0 18M12 3c-2.7 3-2.7 15 0 18" />
  </svg>
);
const IconEditor = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 20h8M12 17v3" />
    <polyline points="8.5 9 6.5 11 8.5 13" />
    <line x1="12" y1="8.5" x2="10.5" y2="13.5" />
  </svg>
);
const IconPipeline = () => (
  <svg {...iconProps}>
    <path d="M4 12a8 8 0 0 1 13.6-5.7L20 8" />
    <polyline points="20 3 20 8 15 8" />
    <path d="M20 12a8 8 0 0 1-13.6 5.7L4 16" />
    <polyline points="4 21 4 16 9 16" />
  </svg>
);

/* --------------------------------------------------------------- features */
const features = [
  {
    title: 'Readable, expressive syntax',
    icon: <IconSyntax />,
    description:
      'Describe, Context, It and Should read like plain English. Tests document intent instead of hiding it in boilerplate.',
  },
  {
    title: 'Powerful mocking',
    icon: <IconMock />,
    description:
      'Replace any command with a mock, control what it returns, and assert exactly how it was called — no dependency injection required.',
  },
  {
    title: 'Built-in code coverage',
    icon: <IconCoverage />,
    description:
      'See which lines your tests exercise and export JaCoCo or Cobertura reports your pipeline already understands.',
  },
  {
    title: 'Runs everywhere',
    icon: <IconEverywhere />,
    description:
      'PowerShell 7.4+ on Windows, Linux and macOS — test the same code everywhere it runs.',
  },
  {
    title: 'First-class VS Code',
    icon: <IconEditor />,
    description:
      'Run and debug tests straight from the Test Explorer, jump to failures, and scaffold tests with snippets.',
  },
  {
    title: 'CI/CD ready',
    icon: <IconPipeline />,
    description:
      'Emit NUnit or JUnit results for GitHub Actions, Azure Pipelines, Jenkins and more. Fail the build when a test fails.',
  },
];

const sampleTest = `BeforeAll {
    . $PSScriptRoot/Get-Planet.ps1
}

Describe 'Get-Planet' {
    It 'lists all 8 planets' {
        $planets = Get-Planet
        $planets.Count | Should-Be 8
    }
}`;

/* --------------------------------------------------------------- fragments */
function CopyableCommand() {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    try {
      navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      /* clipboard not available */
    }
  };

  return (
    <button type="button" className={styles.installBox} onClick={onCopy} aria-label="Copy install command">
      <span className={styles.installPrompt}>PS&gt;</span>
      <code className={styles.installText}>{INSTALL_COMMAND}</code>
      <span className={styles.installCopy}>{copied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
}

function GitHubStars() {
  return (
    <Link className={clsx('button button--lg', styles.githubButton)} to={GITHUB_URL}>
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
      Star on GitHub
    </Link>
  );
}

/**
 * Path to a doc in Docs in whichever version the reader last browsed,
 * or latest if first visit/never changed or the docId doesn't exist in the older user-preferred version.
 *
 * A docId that doesn't exist in any version will throw during build.
 */
function useDocPath(docId) {
  // null is only returned for drafts, which exist in development builds.
  // 'default' == pluginId for Docs/Commands
  return useLayoutDoc(docId, 'default')?.path;
}

function Hero() {
  const heroImg = useBaseUrl('img/home/hero-terminal.png');
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroBadges}>
          <span className={styles.badge}>Open source</span>
          <span className={styles.badge}>Cross-platform</span>
          <span className={styles.badge}>PowerShell 5.1 &amp; 7.4+</span>
        </div>

        <h1 className={styles.heroTitle}>
          Test your PowerShell.
          <br />
          <span className={styles.heroTitleAccent}>Ship with confidence.</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Pester is the ubiquitous test and mock framework for PowerShell — expressive syntax, powerful
          mocking and beautiful output, everywhere PowerShell runs.
        </p>

        <div className={styles.heroButtons}>
          <Link className={clsx('button button--lg', styles.primaryButton)} to={useDocPath('quick-start')}>
            Get Started
          </Link>
          <GitHubStars />
        </div>

        <CopyableCommand />

        <div className={styles.platforms}>
          <span>Windows</span>
          <span>Linux</span>
          <span>macOS</span>
          <span>Azure Pipelines</span>
          <span>GitHub Actions</span>
        </div>

        <div className={styles.heroShot}>
          <img src={heroImg} alt="Example of Pester test output showing passing and failing tests" loading="lazy" />
        </div>
      </div>
    </header>
  );
}

function CodeSection() {
  const runImg = useBaseUrl('img/home/output-run.png');
  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.sectionInner)}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Write your first test in seconds</h2>
          <p className={styles.sectionLead}>
            Save a <code>*.Tests.ps1</code> file, describe what your code should do, and run it. Pester
            handles discovery, execution and reporting.
          </p>
        </div>

        <div className={styles.codeGrid}>
          <div className={styles.codeCol}>
            <CodeBlock language="powershell" title="Get-Planet.Tests.ps1">
              {sampleTest}
            </CodeBlock>
          </div>
          <div className={styles.codeCol}>
            <div className={styles.shotFrame}>
              <img src={runImg} alt="Pester console output with a passing test" loading="lazy" />
            </div>
            <p className={styles.shotCaption}>
              Green when it passes — and a precise, readable diff the moment it doesn&apos;t.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={clsx('container', styles.sectionInner)}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Everything you need to test PowerShell</h2>
          <p className={styles.sectionLead}>
            From a one-line assertion to validating entire environments — Pester scales with you.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ecosystemLogos = [
  { name: 'PowerShell', src: 'img/home/logos/powershell.png' },
  { name: 'GitHub', src: 'img/home/logos/github.svg', adaptive: true },
  { name: 'Microsoft', src: 'img/home/logos/microsoft.svg' },
  { name: 'Azure', src: 'img/home/logos/azure.svg' },
];

function LogoTile({ name, src, adaptive }) {
  return (
    <img
      className={clsx(styles.logoImg, adaptive && styles.logoAdaptive)}
      src={useBaseUrl(src)}
      alt={`${name} logo`}
    />
  );
}

function Credibility() {
  return (
    <section className={clsx(styles.section, styles.credibility)}>
      <div className={clsx('container', styles.sectionInner)}>
        <div className={styles.statRow}>
          <div className={styles.stat}>
            <img alt="GitHub stars" src="https://img.shields.io/github/stars/pester/pester?style=flat-square&label=GitHub%20stars&color=0072c5" />
          </div>
          <div className={styles.stat}>
            <img alt="PowerShell Gallery downloads" src="https://img.shields.io/powershellgallery/dt/Pester?style=flat-square&label=Gallery%20downloads&color=0072c5" />
          </div>
          <div className={styles.stat}>
            <img alt="Latest Pester version" src="https://img.shields.io/powershellgallery/v/Pester?style=flat-square&label=latest&color=0072c5" />
          </div>
        </div>

        <p className={styles.credibilityNote}>
          Pester is the standard test framework for PowerShell — trusted by the PowerShell project itself and
          teams across the ecosystem, including Microsoft and Azure.
        </p>

        <div className={styles.logoWall}>
          {ecosystemLogos.map((logo) => (
            <LogoTile key={logo.name} {...logo} />
          ))}
        </div>
        <p className={styles.placeholderHint}>
          Logos are trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={clsx('container', styles.sectionInner, styles.sponsors)}>
        <h2 className={styles.sectionTitle}>Meet our sponsors</h2>
        <p className={styles.sectionLead}>
          Pester is sustained by the great folks on OpenCollective and GitHub Sponsors. Become a financial
          contributor and help us keep it thriving.
        </p>

        <h3 className={styles.sponsorHeading}>Individual backers</h3>
        <a href="https://opencollective.com/pester#backers" target="_blank" rel="noreferrer">
          <img src="https://opencollective.com/pester/backers.svg?avatarHeight=72&width=695" alt="Individual backers" />
        </a>

        <h3 className={styles.sponsorHeading}>Organizations</h3>
        <div className={styles.sponsorLogos}>
          <a href="https://www.testmu.ai/" target="_blank" rel="noreferrer">
            <img src={useBaseUrl('img/sponsors/testmu-logo.png')} className="sponsor-logo" alt="TestMu AI" />
          </a>
          <a href="https://www.dotcom-monitor.com/" target="_blank" rel="noreferrer">
            <img src={useBaseUrl('img/sponsors/dotcom-monitor-logo.png')} className="sponsor-logo" alt="Dotcom-Monitor" />
          </a>
          <a href="https://www.loadview-testing.com/" target="_blank" rel="noreferrer">
            <img src={useBaseUrl('img/sponsors/loadview-logo.png')} className="sponsor-logo" alt="LoadView" />
          </a>
        </div>

        <div className={styles.ocSponsors}>
          <a href="https://opencollective.com/pester#sponsors" target="_blank" rel="noreferrer">
            <img src="https://opencollective.com/pester/sponsors.svg?avatarHeight=72" alt="Organization sponsors on OpenCollective" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className={clsx('container', styles.ctaInner)}>
        <h2 className={styles.ctaTitle}>Ready to write your first test?</h2>
        <p className={styles.ctaLead}>Install Pester and go from zero to a green test in minutes.</p>
        <div className={styles.heroButtons}>
          <Link className={clsx('button button--lg', styles.primaryButton)} to={useDocPath('quick-start')}>
            Get Started
          </Link>
          <Link className={clsx('button button--lg', styles.secondaryButton)} to={useDocPath('introduction/installation')}>
            Installation guide
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - The test and mock framework for PowerShell`}
      description="Pester is the ubiquitous test and mock framework for PowerShell.">
      <Hero />
      <main>
        <CodeSection />
        <Features />
        <Credibility />
        <Sponsors />
        <CallToAction />
      </main>
    </Layout>
  );
}
