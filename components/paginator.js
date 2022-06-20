import Link from "next/link";
import { btnGroup, btn } from "../styles/paginator.module.css";

const Paginator = ({ page, search }) => (
  <div className={btnGroup}>
    {page > 1 ? (
      <Link href={`/${parseInt(page) - 1}/${search ? search : ""}`}>
        <a className={btn}>&lt;&lt; Prev</a>
      </Link>
    ) : null}
    <br />
    <Link href={`/${parseInt(page) + 1}/${search ? search : ""}`}>
      <a className={btn}>Next &gt;&gt;</a>
    </Link>
  </div>
);

export default Paginator;
