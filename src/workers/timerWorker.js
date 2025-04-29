import {
  calculateCountdownSecondsCeil,
  calculateCountdownSecondsFloor,
  calculateEndDate,
} from '../utils/timerWorkerFormatters.ts';

let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = calculateEndDate(activeTask.startDate, secondsRemaining);
  let countdownSeconds = calculateCountdownSecondsCeil(endDate);

  function tick() {
    self.postMessage(countdownSeconds);
    countdownSeconds = calculateCountdownSecondsFloor(endDate);

    setTimeout(tick, 1000)
  }

  tick();
};
