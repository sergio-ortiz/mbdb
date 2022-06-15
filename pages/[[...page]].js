import prisma from "../lib/prisma";
import Paginator from "../components/paginator";

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
  <>
    <Paginator page={page} />
    <table className="container">
      <thead>
        <tr>
          <th>name</th>
          <th>address</th>
          <th>city</th>
          <th>zip</th>
          <th>county</th>
          <th>minority</th>
        </tr>
      </thead>
      <tbody>
        {JSON.parse(json).map((biz) => (
          <tr key={biz.id}>
            <td>{biz.name}</td>
            <td>{biz.address}</td>
            <td>{biz.city}</td>
            <td>{biz.zip}</td>
            <td>{biz.county}</td>
            <td>{biz.minority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default HomePage;
