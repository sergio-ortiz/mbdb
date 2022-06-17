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

const BusinessPage = ({ json }) => (
  <div className="container">
    {Object.entries(JSON.parse(json)).map(([k, v]) => (
      <h3 key={k}>
        {k}: {v}
      </h3>
    ))}
  </div>
);

export default BusinessPage;
