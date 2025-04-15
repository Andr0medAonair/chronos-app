import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';
import { toastifyAdapter } from '../../adapters/toastifyAdapter';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const playBeepRef = useRef<() => void | null>(null);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countdownSeconds = e.data;

    if (countdownSeconds <= 0) {
      toastifyAdapter.dismiss();
      toastifyAdapter.info('Task completed');

      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null
      }
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNTDOWN,
        payload: { secondsRemaining: countdownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
