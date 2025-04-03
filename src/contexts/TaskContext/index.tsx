import { createContext, useContext, useState } from 'react';
import { TaskStateModel } from '../../models/TasksStateModel';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaning: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider value={{state, setState}}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext () {
  return useContext(TaskContext)
}
