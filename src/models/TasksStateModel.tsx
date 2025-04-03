import { TaskModel } from './TaskModel';

type Config = {
  workTime: number;
  shortBreakTime: number;
  longBreakTime: number;
};

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaning: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: Config;
};
