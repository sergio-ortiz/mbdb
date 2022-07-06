export async function getServerSideProps({ query }) {
  const select = new Object();
  select[query.field] = true;

  const value = await prisma.business.findUnique({
    where: {
      id: parseInt(query.id),
    },
    select,
  });

  return { props: { value: value[query.field] } };
}

export default ({ value }) => <>{value}</>;
