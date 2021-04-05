import * as taskTypes from "./taskTypes";
import { request } from "../helpers/request";

const apiUrl = process.env.REACT_APP_API_URL;

export const getTasks = () => {
  let url = `${apiUrl}/posts?_start=1&_limit=10`;

  return async (dispatch) => {
    try {
      const response = await request(url);
      dispatch({ type: taskTypes.GET_TASKS_SUCCESS, payload: response });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getTask = (id) => {
  let url = `${apiUrl}/posts/${id}`;

  return async (dispatch) => {
    try {
      const response = await request(url);
      dispatch({ type: taskTypes.GET_TASK_SUCCESS, payload: response });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const deleteTask = () => {
  return (dispatch) => {
    dispatch({ type: taskTypes.DELETE_TASK_SUCCESS });
  };
};
