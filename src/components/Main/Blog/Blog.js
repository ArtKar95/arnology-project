import React from "react";
import classes from "./Blog.module.css";
import blog_1 from "../../../assets/images/blog/blog-1.jpg";
import blog_2 from "../../../assets/images/blog/blog-2.jpg";
import blog_3 from "../../../assets/images/blog/blog-3.jpg";

const Blog = () => {
  return (
    <section id=" recentBlogPosts" className={classes.recentBlogPosts}>
      <div className="container" data-aos="fade-up">
        <header className="sectionHeader">
          <h2>Blog</h2>
          <p>Recent posts form our Blog</p>
        </header>

        <div className="row">
          <div className="col-lg-4">
            <div className={classes.postBox}>
              <div className={classes.postImg}>
                <img src={blog_1} className="img-fluid" alt="" />
              </div>
              <span className={classes.postDate}>Tue, September 15</span>
              <h3 className={classes.postTitle}>
                Eum ad dolor et. Autem aut fugiat debitis voluptatem
                consequuntur sit
              </h3>
              <a
                href="blog-singe.html"
                className={`${classes.readmore} stretched-link mt-auto`}
              >
                <span>Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  fill="currentColor"
                  className={classes.icon}
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className={classes.postBox}>
              <div className={classes.postImg}>
                <img src={blog_2} className="img-fluid" alt="" />
              </div>
              <span className={classes.postDate}>Fri, August 28</span>
              <h3 className={classes.postTitle}>
                Et repellendus molestiae qui est sed omnis voluptates magnam
              </h3>
              <a
                href="blog-singe.html"
                className={`${classes.readmore} stretched-link mt-auto`}
              >
                <span>Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  fill="currentColor"
                  className={classes.icon}
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className={classes.postBox}>
              <div className={classes.postImg}>
                <img src={blog_3} className="img-fluid" alt="" />
              </div>
              <span className={classes.postDate}>Mon, July 11</span>
              <h3 className={classes.postTitle}>
                Quia assumenda est et veritatis aut quae
              </h3>
              <a
                href="blog-singe.html"
                className={`${classes.readmore} stretched-link mt-auto`}
              >
                <span>Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  fill="currentColor"
                  className={classes.icon}
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
