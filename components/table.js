import { useRouter } from "next/router";

const Table = ({ json }) => {
  const router = useRouter();

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>city</th>
          <th>zip</th>
          <th>county</th>
          <th>minority</th>
        </tr>
      </thead>
      <tbody>
        {JSON.parse(json).map((biz) => (
          <tr key={biz.id} onClick={() => router.push(`/business/${biz.id}`)}>
            <td>{biz.name}</td>
            <td>{biz.city}</td>
            <td>{biz.zip}</td>
            <td>{biz.county}</td>
            <td>{biz.minority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
