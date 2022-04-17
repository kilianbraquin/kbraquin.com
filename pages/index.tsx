import { Button } from "@/components/Button";
import { HomePresentation } from "@/components/HomePresentation";
import { Layout } from "@/components/Layout";
import { NextPage } from "next";

const Page: NextPage = () => (
  <Layout
    title="Kilian Braquin"
    description="Kilian Braquin | I'm a full stack developer"
    centered
  >
    <HomePresentation />
  </Layout>
);

export default Page;
