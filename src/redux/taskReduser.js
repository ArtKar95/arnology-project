import * as taskTypes from "./taskTypes";
const defaultState = {
  tasks: [],
  task: [],
};

const taskReduser = (state = defaultState, action) => {
  switch (action.type) {
    case taskTypes.GET_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    case taskTypes.GET_TASK_SUCCESS: {
      return {
        ...state,
        task: action.payload,
      };
    }

    case taskTypes.DELETE_TASK_SUCCESS: {
      return {
        ...state,
        task: [],
      };
    }

    default:
      return state;
  }
};

export default taskReduser;
