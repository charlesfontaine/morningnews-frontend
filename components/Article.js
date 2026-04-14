import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addBookmark, removeBookmark } from '../reducers/bookmarks.js';

function Article(props) {
  const dispatch = useDispatch();

  const handleBookmarkClick = () => {
    if (props.isBookmarked) {
      dispatch(removeBookmark(props))
    }
  }

	return (
		<div className={styles.articles}>
			<div className={styles.articleHeader}>
				<h3>{props.title}</h3>
				<FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} />
			</div>
			<h4 style={{ textAlign: "right" }}>- {props.author}</h4>
			<div className={styles.divider}></div>
      <img src={props.urlToImage} alt={props.title} style={{ width: '100%', height: 'auto' }} />
			<p>{props.description}</p>
		</div>
	);
}

export default Article;
