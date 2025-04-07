import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import styles from './styles.module.css';
import React from 'react';
import { v4 } from 'uuid';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getCycleType } from '../../utils/getCycleType';
import { formatSeconds } from '../../utils/formatSeconds';
import { countRemaningSeconds } from '../../utils/countRemainingSeconds';

export function MainForm() {
  // const [taskName, setTaskName] = React.useState('');
  const { state, setState } = useTaskContext();
  const taskNameInput = React.useRef<HTMLInputElement>(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getCycleType(nextCycle);
  // function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
  //   return setTaskName(event.target.value);
  // }

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current?.value.trim();

    if (!taskName) return alert('Task must have a name');

    const newTask: TaskModel = {
      id: v4(),
      name: taskName,
      startDate: Date.now(),
      duration: state.config[nextCycleType],
      completionDate: null,
      interruptionDate: null,
      type: nextCycleType,
    };

    const secondsRemaning = countRemaningSeconds(newTask.duration);

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaning,
        formattedSecondsRemaining: formatSeconds(secondsRemaning),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form} action=''>
      <div className={styles.formRow}>
        <DefaultInput
          id='myInput'
          labelText='test'
          type='text'
          placeholder='Type something...'
          // value={taskName}
          // onChange={handleInput}
          ref={taskNameInput}
        />
      </div>
      <div className={styles.formRow}>
        <span>The next break is of 25 minutes.</span>
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>
      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} isError='' />
      </div>
    </form>
  );
}
