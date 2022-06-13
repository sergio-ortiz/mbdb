import Link from "next/link";

const Paginator = ({ page }) => (
  <>
    <Link href={`/${parseInt(page) - 1}`}>
      <a>prev</a>
    </Link>
    <br />
    <Link href={`/${parseInt(page) + 1}`}>
      <a>next</a>
    </Link>
  </>
);

export default Paginator;
