import SearchBar from "/components/search-bar";
import Paginator from "/components/paginator";

const Layout = ({ children, page, search }) => (
  <div className="container">
    <SearchBar />
    {children}
    <Paginator page={page} search={search} />
  </div>
);

export default Layout;
