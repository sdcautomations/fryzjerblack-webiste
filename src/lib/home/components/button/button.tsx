import classNames from "classnames";
import { MouseEventHandler, ReactNode } from "react";

import styles from "./button.module.scss";

export const Button = ({
  children,
  onClick,
  disabled = false,
  className,
}: {
  children: ReactNode;
  onClick: MouseEventHandler;
  disabled?: boolean;
  className?: string;
}) => {
  const buttonClassNames = classNames(styles["button"], className, {
    [styles["button--disabled"]]: disabled,
  });

  return (
    <div className={buttonClassNames} onClick={onClick}>
      {children}
    </div>
  );
};
