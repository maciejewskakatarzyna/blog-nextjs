import Layout from 'components/Layout';
import Head from 'next/head';
import { getList } from '../lib/markdownParser';

export const getStaticProps = () => {
  const projects = getList('_projects');

  return {
    props: { projects }
  };
};

export default function Projects({ projects }) {
  console.log('projects', projects);
  return (
    <Layout>
      {' '}
      <Head>
        <title>My projects</title>
      </Head>
      <p>tutaj będą projekty</p>
    </Layout>
  );
}
