import { Container } from "@/components/Container";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import { NextSeo } from "next-seo";
import type { FC } from "react";
import styles from "./Layout.module.scss";
import type { LayoutProps } from "./Layout.types";

const variants: Variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const Layout: FC<LayoutProps> = ({
  centered,
  children,
  description,
  title,
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <motion.main
        className={clsx(styles["layout"], {
          [styles["layout--centered"]]: centered,
        })}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "ease-in" }}
      >
        <Container>{children}</Container>
      </motion.main>
    </>
  );
};
