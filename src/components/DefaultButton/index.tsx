import React from 'react';
import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  isError?: string
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, isError, ...props }: DefaultButtonProps) {
  const colour = !isError ? "green" : "red"
  return (
    <>
      <button className={`${styles.button} ${styles[colour]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
