import { Button } from "@/components/Button";
import { HomePresentation } from "@/components/HomePresentation";
import { Layout } from "@/components/Layout";
import { NextPage } from "next";

const Page: NextPage = () => (
  <Layout title="Home Page" description="description" centered>
    <HomePresentation />
  </Layout>
);

export default Page;
