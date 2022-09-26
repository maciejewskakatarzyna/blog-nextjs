import Layout from 'components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getListOfArticles } from '../services/articles';

export const getStaticProps = () => {
  const articles = getListOfArticles();

  return {
    props: { articles }
  };
};

export default function Home({ articles }) {
  return (
    <Layout>
      <Head>
        <title>Blog - recent posts</title>
      </Head>
      <section className="flex flex-row flex-wrap mx-auto">
        {articles.map((article, idx) => (
          <Link href={`/articles/${article.slug}`} key={idx}>
            <a className="transition-all duration-150 flex w-full mb-6 px-4 md:w-1/2 lg:w-1/3">
              <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-slate-800 rounded-md shadow shadow-lg hover:shadow-slate-700">
                <div className="md:flex-shrink-0">
                  <Image
                    src={article.cover}
                    width="490"
                    height="225"
                    alt="Blog Cover"
                    className="object-fill w-full md:h-56 rounded-md rounded-b-none"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                  <span className="text-xs font-medium text-grey-font uppercase">
                    {article.tags[0]}
                  </span>
                  <div className="text-xs font-medium text-grey-font flex flex-row items-center">
                    {new Date(article.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <hr className="border-bcg" />
                <div className="flex flex-wrap items-center px-4 py-4 text-center mx-auto">
                  <h2 className="text-lg font-bold tracking-normal text-font">{article.title}</h2>
                </div>
                <hr className="border-bcg" />
                <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-font">
                  {article.description}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </section>
    </Layout>
  );
}
