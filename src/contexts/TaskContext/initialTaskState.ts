import { TaskStateModel } from "../../models/TasksStateModel";

export const initialTaskState: TaskStateModel = {
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
