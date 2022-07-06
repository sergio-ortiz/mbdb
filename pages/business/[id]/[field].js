export async function getServerSideProps({ query }) {
  const select = new Object();
  select[query.field] = true;

  const results = await prisma.business.findUnique({
    where: {
      id: parseInt(query.id),
    },
    select,
  });

  return { props: { k: query.field, v: results[query.field] } };
}

const FieldPage = ({ k, v }) => (
  <form className="container" action="/api/update-field" method="post">
    <p>
      <b>{k}: </b>
      <input name={k} type="text" defaultValue={v} size={v.length} />{" "}
      <button value="submit">update</button>
    </p>
  </form>
);

export default FieldPage;
