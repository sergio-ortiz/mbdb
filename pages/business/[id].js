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
    <h1>Business Profile</h1>
    {Object.entries(JSON.parse(json)).map(([k, v]) => (
      <p key={k}>
        <b>{k}</b>: {v}
      </p>
    ))}
  </div>
);

export default BusinessPage;
