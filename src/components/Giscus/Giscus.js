import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Giscus from "@giscus/react";
import React from 'react';
import styles from './styles.module.css';

/**
 * Adds a meta-tag to ensure new dicussion always add the canonical link in the initial post.
 * Avoids any localhost etc. if first reaction/post was made from a preview build
 *
 * See https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#giscusbacklink
 */
export function GiscusHead() {
  const {
    siteConfig: { url: siteUrl },
  } = useDocusaurusContext();
  const { pathname } = useLocation();
  const canonicalUrl = siteUrl + useBaseUrl(pathname);

  return (
    <Head>
      <meta name="giscus:backlink" content={canonicalUrl} />
    </Head>
  )
}

export function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <section className={styles.commentsSection}>
      <Giscus
        repo="fflaten/docs"
        repoId="MDEwOlJlcG9zaXRvcnkzMDY2ODYxNTc"
        category="Comments"
        categoryId="DIC_kwDOEkeozc4CWO6M"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
        crossorigin="anonymous"
        async
      />
    </section>
  );
}
