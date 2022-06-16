import Link from "next/link";

const Table = ({ json }) => (
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
        <Link href={`/business/${biz.id}`} key={biz.id}>
          <a>
            <tr>
              <td>{biz.name}</td>
              <td>{biz.address}</td>
              <td>{biz.city}</td>
              <td>{biz.zip}</td>
              <td>{biz.county}</td>
              <td>{biz.minority}</td>
            </tr>
          </a>
        </Link>
      ))}
    </tbody>
  </table>
);

export default Table;
