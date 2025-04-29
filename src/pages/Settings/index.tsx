import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import React, { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { toastifyAdapter } from '../../adapters/toastifyAdapter';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

import styles from './styles.module.css';

export function Settings() {
  useEffect(() => {
    document.title = 'Settings - Chronos Pomodoro';
  }, []);

  const { state, dispatch } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toastifyAdapter.dismiss();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);
    const formErrors = [];

    if (!workTime && !shortBreakTime && !longBreakTime) {
      formErrors.push('Please input a value.');
    }

    if (isNaN(workTime)) {
      formErrors.push('Please write a numeric value for work time.');
    }

    if (isNaN(shortBreakTime)) {
      formErrors.push('Please write a numeric value for the short break.');
    }

    if (isNaN(longBreakTime)) {
      formErrors.push('Please write a numeric value for the long break.');
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('Please write a value between 1 and 99 for work time.');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push(
        'Please write a value between 1 and 30 for the short break.',
      );
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push(
        'Please write a value between 1 and 60 for the short break.',
      );
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        toastifyAdapter.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        config: {
          workTime,
          shortBreakTime,
          longBreakTime,
        },
      },
    });

    toastifyAdapter.success('Settings saved successfully!');
  }

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
          <form onSubmit={handleSaveSettings} action='' className={styles.form}>
            <div className={styles.formRow}>
              <DefaultInput
                id='workTime'
                labelText='Work Time'
                ref={workTimeInputRef}
                defaultValue={state.config.workTime}
                type='number'
              />
            </div>
            <div className={styles.formRow}>
              <DefaultInput
                id='shortBreakTime'
                labelText='Short Break Time'
                ref={shortBreakTimeInputRef}
                defaultValue={state.config.shortBreakTime}
                type='number'
              />
            </div>
            <div className={styles.formRow}>
              <DefaultInput
                id='longBreakTime'
                labelText='Long Break Time'
                ref={longBreakTimeInputRef}
                defaultValue={state.config.longBreakTime}
                type='number'
              />
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
