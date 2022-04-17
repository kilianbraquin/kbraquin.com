import clsx from "clsx";
import type { FC } from "react";
import styles from "./Button.module.scss";
import type { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button className={clsx(className, styles["button"])} {...props} />;
};
