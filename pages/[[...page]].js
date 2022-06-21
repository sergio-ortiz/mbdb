import prisma from "../lib/prisma";
import Layout from "../components/layout";
import Table from "../components/table";

export async function getServerSideProps({ params }) {
  let page = 1;
  let search = null;
  let filter = {};

  if (params.page) {
    if (params.page.length > 1) {
      search = params.page.pop();
      filter = { name: { startsWith: search.slice(0, 4) } };
    }
    page = params.page.shift();
  }

  const results = await prisma.business.findMany({
    skip: page * 10 - 10,
    take: 10,
    where: filter,
  });

  const json = JSON.stringify(results);

  const pageLength = results.length;

  const props = { page, search, json, pageLength };

  return { props };
}

const HomePage = ({ page, search, json, pageLength }) => (
  <Layout page={page} search={search} pageLength={pageLength}>
    <Table json={json} />
  </Layout>
);

export default HomePage;
