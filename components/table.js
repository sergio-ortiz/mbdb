const Table = ({ json }) => (
  <>
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

export default Table;
