import Paginator from "/components/paginator";
const Layout = ({ children, page }) => (
  <div className="container">
    {children}
    <Paginator page={page} />
  </div>
);

export default Layout;
