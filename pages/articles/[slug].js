// noinspection JSUnresolvedLibraryURL

import Layout from 'components/Layout';
import Head from 'next/head';
import { getArticle, getListOfArticles } from 'services/articles';

export const getStaticPaths = async () => {
  const articles = getListOfArticles('_articles');

  return {
    paths: articles.map((art) => ({ params: { slug: art.slug } })),
    fallback: false
  };
};

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const article = await getArticle(slug);
  return {
    props: { article }
  };
};

export default function Article({ article }) {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
        <link href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css" rel="stylesheet" />
      </Head>
      <div>
        <h1 className="text-center text-3xl font-bold mb-10 text-white">{article.title}</h1>
        <div
          className="max-w-3xl mx-auto articleBody text-font text-lg"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </Layout>
  );
}
