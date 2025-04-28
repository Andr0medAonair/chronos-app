import React from 'react';

import styles from './styles.module.css';

export enum Colour {
  RED = "red",
  GREEN = "green"
}

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
