import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Welcome from '@site/src/components/Welcome'
import Welcome2 from '@site/src/components/Welcome2'
import Welcome3 from '@site/src/components/Welcome3'
import Install from '@site/src/components/Install'
import Demo from '@site/src/components/Demo'
import About from '@site/src/components/About'
import About2 from '@site/src/components/About2'
import About3 from '@site/src/components/About3'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Welcome />
        <Welcome2 />
        <Welcome3 />
        <Install />
        <Demo />
        <About />
        <About2 />
        <About3 />
      </main>
    </Layout>
  );
}
