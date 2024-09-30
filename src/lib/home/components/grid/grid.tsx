import classNames from "classnames";

import styles from "./grid.module.scss";
import { GridProps } from "./grid.types";

export const Grid = ({ children, className }: GridProps) => {
  const gridClassNames = classNames(styles["grid"], className);

  return <div className={gridClassNames}>{children}</div>;
};
