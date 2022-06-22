import { useRouter } from "next/router";
import styles from "/styles/search-bar.module.css";

const SearchBar = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/1?name=${e.target.search.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name="search"
        type="text"
        placeholder="search"
      />
      <select className={styles.select} name="modifier">
        <option value="name">name</option>
        <option value="city">city</option>
        <option value="zip">zip</option>
        <option value="county">county</option>
        <option value="minority">minority</option>
      </select>
    </form>
  );
};

export default SearchBar;
