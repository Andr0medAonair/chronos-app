import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';

export function Settings() {
  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>Settings</Heading>
        </Container>
        <Container>
          <div>
            <span className={styles.configBody}>
              Modify the settings for worktime, short break time and long break
              time
            </span>
          </div>
        </Container>
        <Container>
          <form action='' className={styles.form}>
            <div className={styles.formRow}>
              <DefaultInput id='workTime' labelText='Work Time' />
            </div>
            <div className={styles.formRow}>
              <DefaultInput id='shortBreakTime' labelText='Short Break Time' />
            </div>
            <div className={styles.formRow}>
              <DefaultInput id='longBreakTime' labelText='Long Break Time' />
            </div>
            <div className={styles.formRow}>
              <DefaultButton
                icon={<SaveIcon />}
                title='Save settings'
                aria-label='Save settings'
              />
            </div>
          </form>
        </Container>
      </MainTemplate>
    </>
  );
}
