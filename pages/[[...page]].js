import prisma from "../lib/prisma";
import Layout from "../components/layout";
import Table from "../components/table";

export async function getServerSideProps({ query }) {
  let page = 1;
  let search = null;
  let mod = null;
  let filter = {};

  for (const key of Object.keys(query)) {
    if (key == "page") {
      page = query.page[0];
    } else {
      search = query[key];
      mod = key;
      filter[key] =
        key == "naics_codes" ? { contains: search } : { startsWith: search };
    }
  }

  const results = await prisma.business.findMany({
    skip: page * 10 - 10,
    take: 10,
    where: filter,
  });

  const json = JSON.stringify(results);

  const pageLength = results.length;

  return { props: { page, search, mod, json, pageLength } };
}

const HomePage = ({ page, search, mod, json, pageLength }) => (
  <Layout page={page} search={search} mod={mod} pageLength={pageLength}>
    <Table json={json} />
  </Layout>
);

export default HomePage;
