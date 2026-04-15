import { useEffect, useState } from "react";
import Head from "next/head";
import Article from "./Article";
import TopArticle from "./TopArticle";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";

function Home() {
  const [topArticle, setTopArticle] = useState({});
  const [articlesData, setArticlesData] = useState([]);
  const bookmarks = useSelector((state) => state.bookmarks.value);

  useEffect(() => {
    fetch(`http://localhost:3000/articles`)
      .then((response) => response.json())
      .then((data) => {
        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.slice(1));
      });
  }, []);

  // articlesDatas: c'est l'état que j'ai set via sont setter dédié setArticlesData, au moment où j'ai fetch tous les articles depuis mon backend en webservice
  const articles = articlesData.map((data, i) => {
    const isBookmarked = bookmarks.some(
      (bookmark) => bookmark.title === data.title,
    );
    return <Article key={i} {...data} isBookmarked={isBookmarked} />;
  });

  return (
    <div>
      <Head>
        <title>Morning News - Home</title>
      </Head>

      <TopArticle {...topArticle} />

      <div className={styles.articlesContainer}>{articles}</div>
    </div>
  );
}

export default Home;
