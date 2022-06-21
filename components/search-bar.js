import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/1/${e.target.search.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search </label>
      <input name="search" type="text" />
    </form>
  );
};

export default SearchBar;
