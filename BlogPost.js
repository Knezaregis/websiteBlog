import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaShareAlt } from "react-icons/fa";
import loader from "../assets/Dual Ring-1s-200px.svg";
import { useParams, Link } from "react-router-dom";

function Andimakuru() {
  const [getNews, setGetNews] = useState();
  const { content } = useParams();
  const url = `http://localhost:27017/NewsRoute/${content}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setGetNews({ NewsRoute: res.data });
      })
      .catch((error) => console.log(error));
  }, []);
  //get currentPosts
    function clickme(items){
    console.log(items.content);
  }
  return (
    <section className="container-fluid justify-amakuru relative min-h-screen">
      <article className="container Andimakuru-row-container">
        {getNews ? (
          getNews.NewsRoute.map((items) => (
            <article key={items.id} className="andimakuru-post">
              <span className="">
                <img
                  src={items.imageUrl}
                  alt="news post"
                  className="post-size-style"
                />
              </span>
              <article className="andimakuru-icons">
                <span className="story-date-posted">{items.date}</span>
                <span>
                  <FaEye className="colorful-icons" />
                </span>
                <span>
                  <FaShareAlt className="colorful-icons" />
                </span>
              </article>
              <span>
                <h6 id="title-news-post">
                  <Link to='/article/${items.content}' className="target">{items.title}</Link>
                </h6>
              </span>
              <span>
                <p id="style-read-news">{items.read}</p>
              </span>
            </article>
          ))
        ) : (
          <img src={loader} className="loader-size" />
        )}
      </article>
    </section>
  );
}
export default Andimakuru;
