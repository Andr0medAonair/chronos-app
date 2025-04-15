import gravitationalBeep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep(): () => void {
  const audio = new Audio(gravitationalBeep);
  audio.load();

  return () => {
    try {
        audio.currentTime = 0;
        audio.play();            
    } catch (error) {
        console.error('Audio playback error:', error);
        throw new Error('Playback failed.');
    }
  };
}
