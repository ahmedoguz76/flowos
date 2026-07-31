import type { ReactNode } from "react";

import styles from "./ScreenTransition.module.css";

type ScreenTransitionProps = {
  screenKey: string;
  children: ReactNode;
};

export function ScreenTransition({
  screenKey,
  children,
}: ScreenTransitionProps) {
  return (
    <div key={screenKey} className={styles.screen}>
      {children}
    </div>
  );
}