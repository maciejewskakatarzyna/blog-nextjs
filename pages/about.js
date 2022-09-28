import Layout from 'components/Layout';
import Head from 'next/head';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About me</title>
      </Head>
      <p className="text-font">Here will be something about me...</p>
    </Layout>
  );
}
