import prisma from "../../lib/prisma";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const results = await prisma.business.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  const json = JSON.stringify(results);

  return { props: { json } };
}

const BusinessPage = ({ json }) => <>{json}</>;

export default BusinessPage;
