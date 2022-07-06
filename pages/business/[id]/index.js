import Link from "next/link";
import prisma from "../../../lib/prisma";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const results = await prisma.business.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  const json = JSON.stringify(results);

  return { props: { id, json } };
}

const BusinessPage = ({ id, json }) => (
  <div className="container">
    <h1>Business {id} Profile</h1>
    {Object.entries(JSON.parse(json)).map(([k, v]) => (
      <p key={k}>
        <Link href={`/business/${id}/${k}`}>
          <a>
            <b>{k}</b>: {v}
          </a>
        </Link>
      </p>
    ))}
  </div>
);

export default BusinessPage;
