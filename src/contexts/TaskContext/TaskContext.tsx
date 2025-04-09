import { createContext } from "react";
import { TaskStateModel } from "../../models/TasksStateModel";
import { initialTaskState } from "./initialTaskState";
import { TaskActionModel } from "./taskActions";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

export const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);