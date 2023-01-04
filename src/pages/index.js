import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Button from "../components/widgets/buttons/Button";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div>
        <div className={styles.world}>
          <div className={styles.africa}>
            <div className={styles.africa1}></div>
            <div className={styles.africa2}></div>
            <div className={styles.africa3}></div>
            <div className={styles.africa4}></div>
            <div className={styles.africa5}></div>
            <div className={styles.africa6}></div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Button>Belajar JavaScript - 5min ⏱️</Button>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
