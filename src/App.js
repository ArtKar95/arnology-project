import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, useLocation } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
// import Tasks from "./components/Tasks/Tasks";
// import TaskPage from "./components/TaskPage/TaskPage";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import BlogPage from "./components/Main/Blog/BlogPage/BlogPage";
import SingleBlogPage from "./components/Main/Blog/BlogPage/SingleBlogPage";
import MainPage from "./components/Pages/MainPage";
import PortfolioDetails from "./components/Main/Portfolio/PortfolioDetails/PortfolioDetails";

function App() {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Nav offset={offset} handleScroll={handleScroll} />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/portfolio-details" exact component={PortfolioDetails} />
        <Route path="/blogs" exact component={BlogPage} />
        <Route path="/blog-single" exact component={SingleBlogPage} />
      </Switch>

      <Footer />

      {/* <Switch>
        <Route path="/" exact component={Tasks} />
        <Route path="/task/:id" exact component={TaskPage} />
      </Switch> */}

      <div>
        <a
          href={`${useLocation().pathname}#`}
          className={`${
            offset > 20 ? "active" : ""
          }  back-to-top d-flex align-items-center justify-content-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="icon"
          >
            <path d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});

export default App;
