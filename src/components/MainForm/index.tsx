import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { Colour, DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import React from 'react';
import { v4 } from 'uuid';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getCycleType } from '../../utils/getCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import { toastifyAdapter } from '../../adapters/toastifyAdapter';

import styles from './styles.module.css';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = React.useRef<HTMLInputElement>(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getCycleType(nextCycle);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name ?? "";

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toastifyAdapter.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) return toastifyAdapter.error('Task must have a name');

    const newTask: TaskModel = {
      id: v4(),
      name: taskName,
      startDate: Date.now(),
      duration: state.config[nextCycleType],
      completionDate: null,
      interruptionDate: null,
      type: nextCycleType,
    };

    toastifyAdapter.success('Task started');

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleTaskInterruption(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();
    toastifyAdapter.dismiss();
    toastifyAdapter.warn('Task interrupted');

    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form} action=''>
      <div className={styles.formRow}>
        <DefaultInput
          id='myInput'
          labelText='Task'
          type='text'
          placeholder='Type something...'
          // value={taskName}
          // onChange={handleInput}
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>
      <div className={styles.formRow}>
        <Tips />
      </div>
      {state.currentCycle > 0 && (
        <div className={styles.formRow}>
          <Cycles />
        </div>
      )}
      <div className={styles.formRow}>
        {!state.activeTask ? (
          <DefaultButton
            key='submit-button'
            aria-label='Begin new task'
            title='Begin new task'
            type='submit'
            icon={<PlayCircleIcon />}
          />
        ) : (
          <DefaultButton
            key='interruption-button'
            aria-label='Pause current task'
            title='Pause current task'
            type='button'
            color={Colour.RED}
            onClick={handleTaskInterruption}
            icon={<StopCircleIcon />}
          />
        )}
      </div>
    </form>
  );
}
