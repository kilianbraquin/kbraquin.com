import { Button } from "@/components/Button";
import GithubOutline from "@/icons/github-outline.svg";
import Kongregate from "@/icons/kongregate.svg";
import LinkedInOutline from "@/icons/linkedin-outline.svg";
import Link from "next/link";
import type { FC } from "react";
import styles from "./HomePresentation.module.scss";

export const HomePresentation: FC = () => {
  return (
    <div className={styles["home-presentation"]}>
      <h1 className={styles["home-presentation__title"]}>
        {"Kilian Braquin-Mitel"}
      </h1>
      <p className={styles["home-presentation__description"]}>
        {"Full Stack Developer"}
      </p>
      <ul className={styles["home-presentation__links"]}>
        <li>
          <Link href="https://github.com/kilianbraquin">
            <a>
              <Button>
                <GithubOutline
                  width={16}
                  height={16}
                  style={{ marginRight: "6px" }}
                />
                Github
              </Button>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/kilian-braquin-mitel-2b3262161">
            <a>
              <Button>
                <LinkedInOutline
                  width={16}
                  height={16}
                  style={{ marginRight: "6px" }}
                />
                LinkedIn
              </Button>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.kongregate.com/accounts/IndieBaie">
            <a>
              <Button>
                <Kongregate
                  width={16}
                  height={16}
                  style={{ marginRight: "6px" }}
                />
                Kongregate
              </Button>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
