import Heading from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export default function App() {
  return (
    <>
      <Heading>
        Welcome to Chronos App
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>This is your starting point!</p>
    </>
  );
}
