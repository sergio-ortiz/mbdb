export async function getServerSideProps({ query }) {
  return { props: { query: query.field } };
}

export default ({ query }) => <>{query}</>;
