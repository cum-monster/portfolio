import Footer from "../components/Footer";
import TransitionLayout from "../components/Transition/TransitionLayout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  <DefaultSeo
    openGraph={{
      type: "website",
      locale: "pl_PL",
      url: "https://www.siemanobojano.xyz",
      siteName: "siemanobojano.xyz",
    }}
    twitter={{
      cardType: "summary_large_image",
    }}
    robotsProps={{
      nosnippet: true,
      notranslate: true,
      noimageindex: true,
      noarchive: true,
      maxSnippet: -1,
      maxImagePreview: "none",
      maxVideoPreview: -1,
    }}
    canonical="https://www.siemanobojano.xyz"
  />;

  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done(false);
  });

  return (
    <div className="text-white">
      <TransitionLayout>
        <Component {...pageProps} />
        <Footer />
      </TransitionLayout>
    </div>
  );
}
