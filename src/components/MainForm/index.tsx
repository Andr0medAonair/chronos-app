import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import styles from './styles.module.css';

export function MainForm() {
  return (
    <form className={styles.form} action=''>
      <div className={styles.formRow}>
        <DefaultInput
          id='myInput'
          labelText='test'
          type='text'
          placeholder='Type something...'
        />
      </div>
      <div className={styles.formRow}>
        <span>The next break is of 25 minutes.</span>
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>
      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} isError='' />
      </div>
    </form>
  );
}
