import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTasks } from "../../redux/taskAC";
import classes from "./Tasks.module.css";

const Tasks = ({ tasks, getTasks }) => {
  useEffect(() => {
    getTasks();
    /* eslint-disable */
  }, []);
  return (
    <div>
      <ol className={classes.titles}>
        {tasks.map((item) => (
          <li key={item.id}>
            <Link to={`task/${item.id}`}> {item.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = {
  getTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
