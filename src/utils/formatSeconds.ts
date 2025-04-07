export function formatSeconds(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return [minutes, secs].map(unit => String(unit).padStart(2, '0')).join(':');
}
