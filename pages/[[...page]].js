import prisma from "../lib/prisma";
import Layout from "../components/layout";
import Table from "../components/table";

export async function getServerSideProps({ params }) {
  const page = params.page ? params.page.shift() : 1;

  const results = await prisma.business.findMany({
    skip: page * 10 - 10,
    take: 10,
  });

  const json = JSON.stringify(results);

  const props = { page, json };

  return { props };
}

const HomePage = ({ page, json }) => (
  <Layout page={page}>
    <Table json={json} />
  </Layout>
);

export default HomePage;
