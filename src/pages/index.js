import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Welcome from '@site/src/components/Welcome'
import Install from '@site/src/components/Install'
import Demo from '@site/src/components/Demo'
import About from '@site/src/components/About'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Welcome />
        <Install />
        <Demo />
        <About />
      </main>
    </Layout>
  );
}
