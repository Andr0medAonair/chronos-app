import { TaskModel, TaskType } from '../models/TaskModel';

export function getCycleType(cycle: number): TaskModel['type'] {
  if (cycle % 8 === 0) return TaskType.LONG_BREAK_TIME;
  if (cycle % 2 === 0) return TaskType.SHORT_BREAK_TIME;
  return TaskType.WORK_TIME;
}
