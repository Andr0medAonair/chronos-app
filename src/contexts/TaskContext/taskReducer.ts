import { TaskStateModel } from '../../models/TasksStateModel';
import { countRemaningSeconds } from '../../utils/countRemainingSeconds';
import { formatSeconds } from '../../utils/formatSeconds';
import { getNextCycle } from '../../utils/getNextCycle';
import { TaskActionModel, TaskActionTypes } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaning = countRemaningSeconds(newTask.duration);
      const formattedSecondsRemaining = formatSeconds(secondsRemaning);

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaning,
        formattedSecondsRemaining,
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaning: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          return state.activeTask && state.activeTask.id === task.id
            ? { ...task, interruptionDate: Date.now() }
            : task;
        }),
      };
    }
    case TaskActionTypes.RESET_TASK: {
      return state;
    }
  }
}
