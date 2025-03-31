import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <section>LOGO</section>
      </Container>
      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
