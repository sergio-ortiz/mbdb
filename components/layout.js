import SearchBar from "/components/search-bar";
import Paginator from "/components/paginator";

const Layout = ({ children, page, search, pageLength }) => (
  <div className="container">
    <SearchBar />
    {children}
    <Paginator page={page} search={search} pageLength={pageLength} />
  </div>
);

export default Layout;
