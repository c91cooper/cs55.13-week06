import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

import { getResourceData } from '../lib/resources';

export async function getStaticProps() {
  const allData = await getResourceData();

  return allData.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });
}
export default function Home({ allData }) {
  return (
      <Layout home>
        <h1>List of Names</h1>
        <div className="list-group">
          {allData ?
            allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))
            : null}
        </div>
      </Layout>
  );
}
