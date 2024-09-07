import classNames from "classnames";
import styles from "./image.module.scss";
import { ImageProps } from "next/image";

export const Image = ({ src, alt, className }: ImageProps) => {
  const imageClassNames = classNames(styles["image"], className);

  return <img className={imageClassNames} src={`/assets/images/`} alt={alt} />;
};
