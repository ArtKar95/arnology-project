import React from "react";
import classes from "./BlogPage.module.css";
import blog_1 from "../../../../assets/images/blog/blog-1.jpg";
import blog_inside_post1 from "../../../../assets/images/blog/blog-inside-post.jpg";
import blog_author from "../../../../assets/images/blog/blog-author.jpg";
import comments_1 from "../../../../assets/images/blog/comments-1.jpg";
import comments_2 from "../../../../assets/images/blog/comments-2.jpg";
import comments_3 from "../../../../assets/images/blog/comments-3.jpg";
import comments_4 from "../../../../assets/images/blog/comments-4.jpg";
import comments_5 from "../../../../assets/images/blog/comments-5.jpg";
import comments_6 from "../../../../assets/images/blog/comments-6.jpg";
import blog_recent_1 from "../../../../assets/images/blog/blog-recent-1.jpg";
import blog_recent_2 from "../../../../assets/images/blog/blog-recent-2.jpg";
import blog_recent_3 from "../../../../assets/images/blog/blog-recent-3.jpg";
import blog_recent_4 from "../../../../assets/images/blog/blog-recent-4.jpg";
import blog_recent_5 from "../../../../assets/images/blog/blog-recent-5.jpg";

const SingleBlogPage = () => {
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>Blog Single</li>
          </ol>
          <h2>Blog Single</h2>
        </div>
      </section>

      <section id="blog" className={classes.blog}>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className={`${classes.entry} ${classes.entrySingle}`}>
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
                      </svg>{" "}
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

                  <p>
                    Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
                    reiciendis. Sequi in accusamus harum vel aspernatur.
                    Excepturi numquam nihil cumque odio. Et voluptate
                    cupiditate.
                  </p>

                  <blockquote>
                    <p>
                      Et vero doloremque tempore voluptatem ratione vel aut.
                      Deleniti sunt animi aut. Aut eos aliquam doloribus minus
                      autem quos.
                    </p>
                  </blockquote>

                  <p>
                    Sed quo laboriosam qui architecto. Occaecati repellendus
                    omnis dicta inventore tempore provident voluptas mollitia
                    aliquid. Id repellendus quia. Asperiores nihil magni dicta
                    est suscipit perspiciatis. Voluptate ex rerum assumenda
                    dolores nihil quaerat. Dolor porro tempora et quibusdam
                    voluptas. Beatae aut at ad qui tempore corrupti velit
                    quisquam rerum. Omnis dolorum exercitationem harum qui qui
                    blanditiis neque. Iusto autem itaque. Repudiandae hic quae
                    aspernatur ea neque qui. Architecto voluptatem magni. Vel
                    magnam quod et tempora deleniti error rerum nihil tempora.
                  </p>

                  <h3>Et quae iure vel ut odit alias.</h3>
                  <p>
                    Officiis animi maxime nulla quo et harum eum quis a. Sit hic
                    in qui quos fugit ut rerum atque. Optio provident dolores
                    atque voluptatem rem excepturi molestiae qui. Voluptatem
                    laborum omnis ullam quibusdam perspiciatis nulla nostrum.
                    Voluptatum est libero eum nesciunt aliquid qui. Quia et
                    suscipit non sequi. Maxime sed odit. Beatae nesciunt
                    nesciunt accusamus quia aut ratione aspernatur dolor. Sint
                    harum eveniet dicta exercitationem minima. Exercitationem
                    omnis asperiores natus aperiam dolor consequatur id ex sed.
                    Quibusdam rerum dolores sint consequatur quidem ea. Beatae
                    minima sunt libero soluta sapiente in rem assumenda. Et qui
                    odit voluptatem. Cum quibusdam voluptatem voluptatem
                    accusamus mollitia aut atque aut.
                  </p>
                  <img src={blog_inside_post1} className="img-fluid" alt="" />

                  <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                  <p>
                    Rerum ea est assumenda pariatur quasi et quam. Facilis nam
                    porro amet nostrum. In assumenda quia quae a id praesentium.
                    Quos deleniti libero sed occaecati aut porro autem.
                    Consectetur sed excepturi sint non placeat quia repellat
                    incidunt labore. Autem facilis hic dolorum dolores vel.
                    Consectetur quasi id et optio praesentium aut asperiores
                    eaque aut. Explicabo omnis quibusdam esse. Ex libero illum
                    iusto totam et ut aut blanditiis. Veritatis numquam ut illum
                    ut a quam vitae.
                  </p>
                  <p>
                    Alias quia non aliquid. Eos et ea velit. Voluptatem maxime
                    enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia
                    nisi asperiores est veniam.
                  </p>
                </div>

                <div className={classes.entryFooter}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                  </svg>
                  <ul className={classes.cats}>
                    <li>
                      <a href="/#">Business</a>
                    </li>
                  </ul>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                    <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                  </svg>
                  <ul className={classes.tags}>
                    <li>
                      <a href="/#">Creative</a>
                    </li>
                    <li>
                      <a href="/#">Tips</a>
                    </li>
                    <li>
                      <a href="/#">Marketing</a>
                    </li>
                  </ul>
                </div>
              </article>

              <div
                className={`${classes.blogAuthor} d-flex align-items-center`}
              >
                <img
                  src={blog_author}
                  className="rounded-circle float-left"
                  alt=""
                />
                <div>
                  <h4>Jane Smith</h4>
                  <div className={classes.socialLinks}>
                    <a href="https://twitters.com/#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                    <a href="https://facebook.com/#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                    <a href="https://instagram.com/#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                  </div>
                  <p>
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi
                    eum sed possimus accusantium. Quas repellat voluptatem
                    officia numquam sint aspernatur voluptas. Esse et
                    accusantium ut unde voluptas.
                  </p>
                </div>
              </div>

              <div className={classes.blogComments}>
                <h4 className={classes.commentsCount}>8 Comments</h4>

                <div id="comment-1" className={classes.comment}>
                  <div className="d-flex">
                    <div className={classes.commentImg}>
                      <img src={comments_1} alt="" />
                    </div>
                    <div>
                      <h5>
                        <a href="/">Georgia Reader</a>{" "}
                        <a href="/#" className={classes.reply}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            fill="currentColor"
                            className={classes.icon}
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                          </svg>{" "}
                          Reply
                        </a>
                      </h5>
                      <time dateTime="2020-01-01">01 Jan, 2020</time>
                      <p>
                        Et rerum totam nisi. Molestiae vel quam dolorum vel
                        voluptatem et et. Est ad aut sapiente quis molestiae est
                        qui cum soluta. Vero aut rerum vel. Rerum quos
                        laboriosam placeat ex qui. Sint qui facilis et.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="comment-2" className={classes.comment}>
                  <div className="d-flex">
                    <div className={classes.commentImg}>
                      <img src={comments_2} alt="" />
                    </div>
                    <div>
                      <h5>
                        <a href="/">Aron Alvarado</a>{" "}
                        <a href="/#" className={classes.reply}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            fill="currentColor"
                            className={classes.icon}
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                          </svg>{" "}
                          Reply
                        </a>
                      </h5>
                      <time dateTime="2020-01-01">01 Jan, 2020</time>
                      <p>
                        Ipsam tempora sequi voluptatem quis sapiente non. Autem
                        itaque eveniet saepe. Officiis illo ut beatae.
                      </p>
                    </div>
                  </div>

                  <div
                    id="comment-reply-1"
                    className={`${classes.comment} ${classes.commentReply}`}
                  >
                    <div className="d-flex">
                      <div className={classes.commentImg}>
                        <img src={comments_3} alt="" />
                      </div>
                      <div>
                        <h5>
                          <a href="/">Lynda Small</a>{" "}
                          <a href="/#" className={classes.reply}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              fill="currentColor"
                              className={classes.icon}
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                            </svg>{" "}
                            Reply
                          </a>
                        </h5>
                        <time dateTime="2020-01-01">01 Jan, 2020</time>
                        <p>
                          Enim ipsa eum fugiat fuga repellat. Commodi quo quo
                          dicta. Est ullam aspernatur ut vitae quia mollitia id
                          non. Qui ad quas nostrum rerum sed necessitatibus aut
                          est. Eum officiis sed repellat maxime vero nisi natus.
                          Amet nesciunt nesciunt qui illum omnis est et dolor
                          recusandae. Recusandae sit ad aut impedit et. Ipsa
                          labore dolor impedit et natus in porro aut. Magnam qui
                          cum. Illo similique occaecati nihil modi eligendi.
                          Pariatur distinctio labore omnis incidunt et illum.
                          Expedita et dignissimos distinctio laborum minima
                          fugiat. Libero corporis qui. Nam illo odio beatae enim
                          ducimus. Harum reiciendis error dolorum non autem
                          quisquam vero rerum neque.
                        </p>
                      </div>
                    </div>

                    <div
                      id="comment-reply-2"
                      className={`${classes.comment} ${classes.commentReply}`}
                    >
                      <div className="d-flex">
                        <div className={classes.commentImg}>
                          <img src={comments_4} alt="" />
                        </div>
                        <div>
                          <h5>
                            <a href="/">Sianna Ramsay</a>{" "}
                            <a href="/#" className={classes.reply}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                fill="currentColor"
                                className={classes.icon}
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                              </svg>{" "}
                              Reply
                            </a>
                          </h5>
                          <time dateTime="2020-01-01">01 Jan, 2020</time>
                          <p>
                            Et dignissimos impedit nulla et quo distinctio ex
                            nemo. Omnis quia dolores cupiditate et. Ut unde qui
                            eligendi sapiente omnis ullam. Placeat porro est
                            commodi est officiis voluptas repellat quisquam
                            possimus. Perferendis id consectetur necessitatibus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="comment-3" className={classes.comment}>
                  <div className="d-flex">
                    <div className={classes.commentImg}>
                      <img src={comments_5} alt="" />
                    </div>
                    <div>
                      <h5>
                        <a href="/">Nolan Davidson</a>{" "}
                        <a href="/#" className={classes.reply}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            fill="currentColor"
                            className={classes.icon}
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                          </svg>{" "}
                          Reply
                        </a>
                      </h5>
                      <time dateTime="2020-01-01">01 Jan, 2020</time>
                      <p>
                        Distinctio nesciunt rerum reprehenderit sed. Iste omnis
                        eius repellendus quia nihil ut accusantium tempore.
                        Nesciunt expedita id dolor exercitationem aspernatur aut
                        quam ut. Voluptatem est accusamus iste at. Non aut et et
                        esse qui sit modi neque. Exercitationem et eos
                        aspernatur. Ea est consequuntur officia beatae ea aut
                        eos soluta. Non qui dolorum voluptatibus et optio
                        veniam. Quam officia sit nostrum dolorem.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="comment-4" className={classes.comment}>
                  <div className="d-flex">
                    <div className={classes.commentImg}>
                      <img src={comments_6} alt="" />
                    </div>
                    <div>
                      <h5>
                        <a href="/">Kay Duggan</a>{" "}
                        <a href="/#" className={classes.reply}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            fill="currentColor"
                            className={classes.icon}
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                          </svg>{" "}
                          Reply
                        </a>
                      </h5>
                      <time dateTime="2020-01-01">01 Jan, 2020</time>
                      <p>
                        Dolorem atque aut. Omnis doloremque blanditiis quia eum
                        porro quis ut velit tempore. Cumque sed quia ut maxime.
                        Est ad aut cum. Ut exercitationem non in fugiat.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={classes.replyForm}>
                  <h4>Leave a Reply</h4>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *{" "}
                  </p>
                  <form action="">
                    <div className="row">
                      <div
                        className={`${classes.formGroup} col-md-6 form-group`}
                      >
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="Your Name*"
                        />
                      </div>
                      <div
                        className={`${classes.formGroup} col-md-6 form-group`}
                      >
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          placeholder="Your Email*"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className={`${classes.formGroup} col form-group`}>
                        <input
                          name="website"
                          type="text"
                          className="form-control"
                          placeholder="Your Website"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className={`${classes.formGroup} col form-group`}>
                        <textarea
                          name="comment"
                          className="form-control"
                          placeholder="Your Comment*"
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className={classes.sidebar}>
                <h3 className={classes.sidebarTitle}>Search</h3>
                <div
                  className={`${classes.sidebarItem} ${classes.searchForm} `}
                >
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

export default SingleBlogPage;
