import { Container } from './components/Container';
import { Countdown } from './components/Countdown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/theme.css';
import './styles/global.css';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

export default function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='myInput'
              labelText='test'
              type='text'
              placeholder='Type something...'
            />
          </div>
          <div className='formRow'>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <button>Send</button>
          </div>
        </form>
      </Container>
    </>
  );
}
