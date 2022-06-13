import prisma from "../lib/prisma";

export async function getServerSideProps() {
  const results = await prisma.business.findMany();
  const json = JSON.stringify(results);

  const props = { json };

  return { props };
}

const HomePage = ({ json }) => <p>{json}</p>;

export default HomePage;
