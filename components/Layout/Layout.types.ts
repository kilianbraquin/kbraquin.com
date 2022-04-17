import { PropsWithChildren } from "react";

export type LayoutProps = PropsWithChildren<{
  title: string;
  description: string;
  centered?: boolean;
}>;
