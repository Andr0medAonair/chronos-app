import { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_TASK = 'RESET_TASK',
}

type TaskActionModelWithPayload = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
};

type TaskActionModelWithoutPayload =
  | {
      type: TaskActionTypes.RESET_TASK;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    };
    
export type TaskActionModel =
  | TaskActionModelWithPayload
  | TaskActionModelWithoutPayload;
