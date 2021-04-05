import React, { useEffect } from "react";
import { connect } from "react-redux";
import classes from "./TaskPage.module.css";
import { getTask, deleteTask } from "../../redux/taskAC";

const TaskPage = ({ task, getTask, match: { params } }) => {
  useEffect(() => {
    const taskId = params.id;
    getTask(taskId);

    return () => {
      deleteTask();
    };
  }, [getTask, params.id]);
  return (
    <div className={classes.main}>
      <h2>{task.title}</h2>
      <p>{task.body}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    task: state.task,
  };
};

const mapDispatchToProps = {
  getTask,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
