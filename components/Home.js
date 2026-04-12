import { useEffect, useState } from 'react';
import Head from 'next/head';
import Article from './Article';
import TopArticle from './TopArticle';
import styles from '../styles/Home.module.css';

function Home() {
  const [topArticle, setTopArticle] = useState({});
  const [articlesData, setArticlesData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/articles`)
      .then(response => response.json())
      .then(data => {
        console.log('data', data);

        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.slice(1));
      });
  }, []);

  const articles = articlesData.map((data, i) => {
    //console.log('data', data);
    return <Article key={i} {...data} />
  })

  return (
    <div>
      <Head>
        <title>Morning News - Home</title>
      </Head>

      <TopArticle {...topArticle}  />

      <div className={styles.articlesContainer}>
        {articles}
      </div>
    </div>
  );
}

export default Home;
