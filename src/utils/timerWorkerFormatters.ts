export function calculateEndDate(startDate: number, secondsRemaining: number): number {
  return startDate + secondsRemaining * 1000;
}

export function calculateCountdownSecondsCeil(endDate: number): number {
  const now = Date.now();
  return Math.ceil((endDate - now) / 1000);
}

export function calculateCountdownSecondsFloor(endDate: number): number {
  const now = Date.now();
  return Math.floor((endDate - now) / 1000);
}
