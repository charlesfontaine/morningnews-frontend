import styles from "../styles/Article.module.css";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../reducers/bookmarks.js";

function Article(props) {
  const dispatch = useDispatch();

  const handleBookmarkClick = () => {
    if (props.isBookmarked) {
      dispatch(removeBookmark(props));
    } else {
      dispatch(addBookmark(props));
    }
  };

  let iconStyle = {};
  if (props.isBookmarked) {
    iconStyle = { color: "#e9be59" };
  }

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>{props.title}</h3>
        <FontAwesomeIcon
          icon={faBookmark}
          className={styles.bookmarkIcon}
          onClick={() => {
            handleBookmarkClick();
          }}
          style={iconStyle}
        />
      </div>
      <h4 style={{ textAlign: "right" }}>- {props.author}</h4>
      <div className={styles.divider}></div>
      <img
        src={props.urlToImage}
        alt={props.title}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{props.description}</p>
    </div>
  );
}

export default Article;
