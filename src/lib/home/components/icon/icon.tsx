import classNames from "classnames";
import styles from "./icon.module.scss";

export const Icon = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  const iconClassNames = classNames(styles["icons"], className);

  return (
    <img className={iconClassNames} src={`assets/icons/${src}`} alt={src} />
  );
};
