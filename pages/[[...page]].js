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
      filter = { name: { startsWith: search } };
    }
    page = params.page.shift();
  }

  const results = await prisma.business.findMany({
    skip: page * 10 - 10,
    take: 10,
    where: filter,
  });

  const json = JSON.stringify(results);

  const props = { page, search, json };

  return { props };
}

const HomePage = ({ page, search, json }) => (
  <Layout page={page} search={search}>
    <Table json={json} />
  </Layout>
);

export default HomePage;
