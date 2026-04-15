import Head from "next/head";
import { useSelector } from "react-redux";
import styles from "../styles/Bookmarks.module.css";
import Article from "./Article";

function Bookmarks() {
  // state fait référence au store
  const bookmarks = useSelector((state) => state.bookmarks.value);
  let articles = <p>No bookmark</p>;

  if (bookmarks.length) {
    articles = bookmarks.map((data, i) => {
      return <Article key={i} {...data} isBookmarked />;
    });
  }
  return (
    <div>
      <Head>
        <title>Morning News - Bookmarks</title>
      </Head>
      <div className={styles.container}>
        <h2>Bookmarks</h2>
        {articles}
      </div>
    </div>
  );
}

export default Bookmarks;
