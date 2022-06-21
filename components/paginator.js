import Link from "next/link";
import { btnGroup, btn } from "../styles/paginator.module.css";

const Paginator = ({ page, search, pageLength }) => (
  <div className={btnGroup}>
    {page > 1 ? (
      <Link href={`/${parseInt(page) - 1}${search ? "?name=" + search : ""}`}>
        <a className={btn}>&lt;&lt; Prev</a>
      </Link>
    ) : null}
    <br />
    {pageLength == 10 ? (
      <Link href={`/${parseInt(page) + 1}${search ? "?name=" + search : ""}`}>
        <a className={btn}>Next &gt;&gt;</a>
      </Link>
    ) : null}
  </div>
);

export default Paginator;
