import { v4 } from 'uuid';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getCycleType } from '../../utils/getCycleType';
import { getNextCycle } from '../../utils/getNextCycle';

import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();
  const cycles = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: 'Work time',
    shortBreakTime: 'Short break time',
    longBreakTime: 'Long break time',
  };

  return (
    <div className={styles.cycles}>
      <span>Cycles:</span>
      <div className={styles.cycleDots}>
        {cycles.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getCycleType(nextCycle);
          return (
            <span
              key={v4()}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`${cycleDescriptionMap[nextCycleType]} indicator`}
              title={`${cycleDescriptionMap[nextCycleType]} indicator`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
