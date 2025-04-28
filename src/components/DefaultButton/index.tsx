import React from 'react';
import { Colour } from './colour';

import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: Colour
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, color = Colour.GREEN, ...props }: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
export { Colour };

