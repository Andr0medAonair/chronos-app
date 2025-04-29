import { TaskModel } from '../../models/TaskModel';
import { TaskStateModel } from '../../models/TasksStateModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_TASK = 'RESET_TASK',
  COUNTDOWN = 'COUNTDOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
}

type TaskActionModelWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COUNTDOWN;
      payload: Pick<TaskStateModel, 'secondsRemaining'>;
    }
  | {
      type: TaskActionTypes.CHANGE_SETTINGS;
      payload: Pick<TaskStateModel, 'config'>;
    };

type TaskActionModelWithoutPayload =
  | {
      type: TaskActionTypes.RESET_TASK;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    };

export type TaskActionModel =
  | TaskActionModelWithPayload
  | TaskActionModelWithoutPayload;
