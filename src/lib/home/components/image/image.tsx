import styles from "./image.module.scss";

import classNames from "classnames";

import { ImageProps } from "./image.types";

export const Image = ({ src, alt, className }: ImageProps) => {
  const imageClassNames = classNames(styles["image"], className);

  return (
    <img
      className={imageClassNames}
      src={`assets/images/gallery/${src}`}
      alt={alt}
    />
  );
};
