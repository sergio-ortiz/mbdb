import prisma from "../../../lib/prisma";

export async function getServerSideProps({ query }) {
  const select = new Object();
  select[query.field] = true;

  const results = await prisma.business.findUnique({
    where: {
      id: parseInt(query.id),
    },
    select,
  });

  return { props: { id: query.id, k: query.field, v: results[query.field] } };
}

const FieldPage = ({ id, k, v }) => (
  <form className="container" action="/api/update-field" method="post">
    <p>
      <b>{k}: </b>
      <input type="text" name={k} defaultValue={v} size={v.length} />{" "}
      <input type="hidden" name="id" value={id} />
      <button value="submit">update</button>
    </p>
  </form>
);

export default FieldPage;
