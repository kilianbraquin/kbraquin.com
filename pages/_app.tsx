import "@/styles/main.scss";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import type { FC, PropsWithChildren } from "react";

const App: FC<PropsWithChildren<AppProps>> = ({ Component, pageProps }) => {
  const router = useRouter();
  const url = `https://www.kbraquin.com${router.route}`;

  return (
    <>
      <DefaultSeo
        titleTemplate="Kilian Braquin"
        canonical={url}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url,
          description: "description",
          site_name: "Kilian Braquin | kbraquin.com",
          images: [],
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
