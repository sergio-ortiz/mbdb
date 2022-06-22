import SearchForm from "/components/search-form";
import Paginator from "/components/paginator";

const Layout = ({ children, page, search, pageLength }) => (
  <div className="container">
    <SearchForm />
    {children}
    <Paginator page={page} search={search} pageLength={pageLength} />
  </div>
);

export default Layout;
