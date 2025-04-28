import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { Colour, DefaultButton } from '../../components/DefaultButton';

import styles from './styles.module.css';

export function History() {
  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>History</span>
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color={Colour.RED}
                aria-label='Erase all history'
                title='Erase all history'
              />
            </span>
          </Heading>
        </Container>
        <Container>
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Status</th>
                  <th>Título</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>D</td>
                  <td>E</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </MainTemplate>
    </>
  );
}
