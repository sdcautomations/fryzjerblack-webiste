import classNames from "classnames";
import styles from "./flex.module.scss";

import { FlexProps } from "./flex.types";

export const Flex = ({
  children,
  direction = "column",
  gap = "0px",
  justify = "start",
  align = "start",
  className,
}: FlexProps) => {
  const flexClassNames = classNames(styles["flex"], className);

  return (
    <div
      className={flexClassNames}
      style={{
        display: "flex",
        flexDirection: direction,
        gap: gap,
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};
