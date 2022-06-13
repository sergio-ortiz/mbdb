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
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>address</th>
          <th>city</th>
          <th>state</th>
          <th>zip</th>
          <th>county</th>
          <th>minority</th>
          <th>contact</th>
          <th>phone</th>
          <th>email</th>
          <th>website</th>
          <th>naics_codes</th>
        </tr>
      </thead>
      <tbody>
        {JSON.parse(json).map((biz) => (
          <tr>
            <td>{biz.name}</td>
            <td>{biz.address}</td>
            <td>{biz.city}</td>
            <td>{biz.state}</td>
            <td>{biz.zip}</td>
            <td>{biz.county}</td>
            <td>{biz.minority}</td>
            <td>{biz.contact}</td>
            <td>{biz.phone}</td>
            <td>{biz.email}</td>
            <td>{biz.website}</td>
            <td>{biz.naics_codes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default HomePage;
