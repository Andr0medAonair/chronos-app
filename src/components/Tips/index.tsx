import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getCycleType } from '../../utils/getCycleType';
import { getNextCycle } from '../../utils/getNextCycle';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getCycleType(nextCycle);

  const renderTip = (key: keyof typeof state.config) => (
    <span>The next cycle is {state.config[key]} minutes long.</span>
  );

  const tipsForActiveTask = {
    workTime: <span>Focus for {state.config.workTime} minutes.</span>,
    shortBreakTime: (
      <span>Take a {state.config.shortBreakTime} minute break.</span>
    ),
    longBreakTime: <span>Take a long break.</span>,
  };

  const tipsForInactiveTask = {
    workTime: renderTip('workTime'),
    shortBreakTime: renderTip('shortBreakTime'),
    longBreakTime: renderTip('longBreakTime'),
  };

  return (
    <>
      {!!state.activeTask && tipsForActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForInactiveTask[nextCycleType]}
    </>
  );
}
