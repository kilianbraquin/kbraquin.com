import { Button } from "@/components/Button";
import GithubOutline from "@/icons/github-outline.svg";
import type { FC } from "react";
import styles from "./HomePresentation.module.scss";

export const HomePresentation: FC = () => {
  return (
    <div className={styles["home-presentation"]}>
      <h1 className={styles["home-presentation__title"]}>
        {"Hello, I'm Kilian"}
      </h1>
      <ul className={styles["home-presentation__links"]}>
        <li>
          <Button>Web projects</Button>
        </li>
        <li>
          <Button>Game projects</Button>
        </li>
        <li>
          <Button>
            <GithubOutline style={{ marginRight: "4px" }} /> Github
          </Button>
        </li>
      </ul>
    </div>
  );
};
