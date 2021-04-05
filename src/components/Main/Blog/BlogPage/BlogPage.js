import React from "react";
import classes from "./BlogPage.module.css";
import blog_1 from "../../../../assets/images/blog/blog-1.jpg";
import blog_2 from "../../../../assets/images/blog/blog-2.jpg";
import blog_3 from "../../../../assets/images/blog/blog-3.jpg";
import blog_4 from "../../../../assets/images/blog/blog-4.jpg";
import blog_recent_1 from "../../../../assets/images/blog/blog-recent-1.jpg";
import blog_recent_2 from "../../../../assets/images/blog/blog-recent-2.jpg";
import blog_recent_3 from "../../../../assets/images/blog/blog-recent-3.jpg";
import blog_recent_4 from "../../../../assets/images/blog/blog-recent-4.jpg";
import blog_recent_5 from "../../../../assets/images/blog/blog-recent-5.jpg";

const BlogPage = () => {
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Blog</li>
          </ol>
          <h2>Blog</h2>
        </div>
      </section>

      <section id="blog" className={classes.blog}>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className={classes.entry}>
                <div className={classes.entryImg}>
                  <img src={blog_1} alt="" className="img-fluid" />
                </div>

                <h2 className={classes.entryTitle}>
                  <a href="blog-single.html">
                    Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam quia
                  </a>
                </h2>

                <div className={classes.entryMeta}>
                  <ul>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      <a href="blog-single.html">John Doe</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                      <a href="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                      </svg>
                      <a href="blog-single.html">12 Comments</a>
                    </li>
                  </ul>
                </div>

                <div className={classes.entryContent}>
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas.
                    Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                    nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                    ea dolorem doloremque deleniti aperiam unde soluta. Est cum
                    et quod quos aut ut et sit sunt. Voluptate porro consequatur
                    assumenda perferendis dolore.
                  </p>
                  <div className={classes.readMore}>
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </article>

              <article className={classes.entry}>
                <div className={classes.entryImg}>
                  <img src={blog_2} alt="" className="img-fluid" />
                </div>

                <h2 className={classes.entryTitle}>
                  <a href="blog-single.html">
                    Nisi magni odit consequatur autem nulla dolorem
                  </a>
                </h2>

                <div className={classes.entryMeta}>
                  <ul>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      <a href="blog-single.html">John Doe</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                      <a href="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                      </svg>
                      <a href="blog-single.html">12 Comments</a>
                    </li>
                  </ul>
                </div>

                <div className={classes.entryContent}>
                  <p>
                    Incidunt voluptate sit temporibus aperiam. Quia vitae aut
                    sint ullam quis illum voluptatum et. Quo libero rerum
                    voluptatem pariatur nam. Ad impedit qui officiis est in non
                    aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et
                    quia molestias laboriosam. Tempora nam odit omnis eum
                    corrupti qui aliquid excepturi molestiae. Facilis et sint
                    quos sed voluptas. Maxime sed tempore enim omnis non alias
                    odio quos distinctio.
                  </p>
                  <div className={classes.readMore}>
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </article>
              <article className={classes.entry}>
                <div className={classes.entryImg}>
                  <img src={blog_3} alt="" className="img-fluid" />
                </div>

                <h2 className={classes.entryTitle}>
                  <a href="blog-single.html">
                    Possimus soluta ut id suscipit ea ut. In quo quia et soluta
                    libero sit sint.
                  </a>
                </h2>

                <div className={classes.entryMeta}>
                  <ul>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      <a href="blog-single.html">John Doe</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                      <a href="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                      </svg>
                      <a href="blog-single.html">12 Comments</a>
                    </li>
                  </ul>
                </div>

                <div className={classes.entryContent}>
                  <p>
                    Aut iste neque ut illum qui perspiciatis similique
                    recusandae non. Fugit autem dolorem labore omnis et. Eum
                    temporibus fugiat voluptate enim tenetur sunt omnis.
                    Doloremque est saepe laborum aut. Ipsa cupiditate ex harum
                    at recusandae nesciunt. Ut dolores velit.
                  </p>
                  <div className={classes.readMore}>
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </article>

              <article className={classes.entry}>
                <div className={classes.entryImg}>
                  <img src={blog_4} alt="" className="img-fluid" />
                </div>

                <h2 className={classes.entryTitle}>
                  <a href="blog-single.html">
                    Non rem rerum nam cum quo minus. Dolor distinctio deleniti
                    explicabo eius exercitationem.
                  </a>
                </h2>

                <div className={classes.entryMeta}>
                  <ul>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      <a href="blog-single.html">John Doe</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                      <a href="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                      </svg>
                      <a href="blog-single.html">12 Comments</a>
                    </li>
                  </ul>
                </div>

                <div className={classes.entryContent}>
                  <p>
                    Aspernatur rerum perferendis et sint. Voluptates cupiditate
                    voluptas atque quae. Rem veritatis rerum enim et autem.
                    Saepe atque cum eligendi eaque iste omnis a qui. Quia sed
                    sunt. Ea asperiores expedita et et delectus voluptates
                    rerum. Id saepe ut itaque quod qui voluptas nobis porro
                    rerum. Quam quia nesciunt qui aut est non omnis. Inventore
                    occaecati et quaerat magni itaque nam voluptas. Voluptatem
                    ducimus sint id earum ut nesciunt sed corrupti nemo.
                  </p>
                  <div className={classes.readMore}>
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </article>

              <div className={classes.blogPagination}>
                <ul className="justify-content-center">
                  <li>
                    <a href="/#">1</a>
                  </li>
                  <li className={classes.active}>
                    <a href="/#">2</a>
                  </li>
                  <li>
                    <a href="/#">3</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className={classes.sidebar}>
                <h3 className={classes.sidebarTitle}>Search</h3>
                <div className={`${classes.sidebarItem} ${classes.searchForm}`}>
                  <form action="">
                    <input type="text" />
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </form>
                </div>

                <h3 className={classes.sidebarTitle}>Categories</h3>
                <div className={`${classes.sidebarItem} ${classes.categories}`}>
                  <ul>
                    <li>
                      <a href="/#">
                        General <span>(25)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        Lifestyle <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        Travel <span>(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        Design <span>(22)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        Creative <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        Educaion <span>(14)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <h3 className={classes.sidebarTitle}>Recent Posts</h3>
                <div
                  className={`${classes.sidebarItem} ${classes.recentPosts}`}
                >
                  <div className={`${classes.postItem} clearfix`}>
                    <img src={blog_recent_1} alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Nihil blanditiis at in nihil autem
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className={`${classes.postItem} clearfix`}>
                    <img src={blog_recent_2} alt="" />
                    <h4>
                      <a href="blog-single.html">Quidem autem et impedit</a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className={`${classes.postItem} clearfix`}>
                    <img src={blog_recent_3} alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Id quia et et ut maxime similique occaecati ut
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className={`${classes.postItem} clearfix`}>
                    <img src={blog_recent_4} alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Laborum corporis quo dara net para
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className={`${classes.postItem} clearfix`}>
                    <img src={blog_recent_5} alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Et dolores corrupti quae illo quod dolor
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>

                <h3 className={classes.sidebarTitle}>Tags</h3>
                <div className={`${classes.sidebarItem} ${classes.tags}`}>
                  <ul>
                    <li>
                      <a href="/#">App</a>
                    </li>
                    <li>
                      <a href="/#">IT</a>
                    </li>
                    <li>
                      <a href="/#">Business</a>
                    </li>
                    <li>
                      <a href="/#">Mac</a>
                    </li>
                    <li>
                      <a href="/#">Design</a>
                    </li>
                    <li>
                      <a href="/#">Office</a>
                    </li>
                    <li>
                      <a href="/#">Creative</a>
                    </li>
                    <li>
                      <a href="/#">Studio</a>
                    </li>
                    <li>
                      <a href="/#">Smart</a>
                    </li>
                    <li>
                      <a href="/#">Tips</a>
                    </li>
                    <li>
                      <a href="/#">Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
