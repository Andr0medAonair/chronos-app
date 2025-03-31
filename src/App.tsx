import { Container } from './components/Container';

import './styles/theme.css';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Container>
        <section>HOME</section>
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
