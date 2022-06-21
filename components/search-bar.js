import { useRouter } from "next/router";
import styles from "/styles/search-bar.module.css";

const SearchBar = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/1/${e.target.search.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search: </label>
      <input className={styles.input} name="search" type="text" />
    </form>
  );
};

export default SearchBar;
