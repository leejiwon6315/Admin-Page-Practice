import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.search_container}>
      <form className={styles.search_item} action="#" method="get">
        <input type="text" name="search" placeholder="제품명을 입력해주세요." />
        <button
          className={styles.search_button}
          type="submit"
          name="click"
        ></button>
      </form>
    </div>
  );
};
export default Search;
