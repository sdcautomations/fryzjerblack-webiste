import classNames from "classnames";

import styles from "./text.module.scss";
import { TextProps } from "./text.types";

export const Text = ({
  children,
  size = "24px",
  weight = "400",
  opacity = 1,
  className,
}: TextProps) => {
  const textClassNames = classNames(styles["text"], className);

  return (
    <p
      className={textClassNames}
      style={{ fontSize: size, fontWeight: weight, opacity: opacity }}
    >
      {children}
    </p>
  );
};
