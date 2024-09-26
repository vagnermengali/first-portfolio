import Head from "next/head";
import Script from "next/script";
import { SeoProps } from "@/interfaces/SeoProps/SeoProps";

const Seo = ({ title, description, routes }: SeoProps) => {
    return (
        <>
            <Head>
                <meta name="author" content="Vagner Mengali" />
                <meta name="google-site-verification" content="_8fvEAfFGQP8dvukxXLOHiRP3dkR14Oi33gDIz7Q-gU" />
                <meta name="keywords" content="Javascript" />
                <link rel="fluid-icon" href="/assets/favicons/favicon.svg" title="Vagner Mengali" />
                <link rel="icon" type="image/svg+xml" href="/assets/favicons/favicon.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
                <link rel="icon" href="assets/favicons/favicon-32.png" sizes="32x32" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-48.png" sizes="48x48" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-57.png" sizes="57x57" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-60.png" sizes="60x60" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-72.png" sizes="72x72" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-76.png" sizes="76x76" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-96.png" sizes="96x96" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-120.png" sizes="120x120" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-144.png" sizes="144x144" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-152.png" sizes="152x152" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-180.png" sizes="180x180" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-192.png" sizes="192x192" type="image/png" />
                <link rel="icon" href="assets/favicons/favicon-512.png" sizes="512x512" type="image/png" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-32.png" sizes="32x32" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-48.png" sizes="48x48" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-57.png" sizes="57x57" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-60.png" sizes="60x60" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-72.png" sizes="72x72" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-76.png" sizes="76x76" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-96.png" sizes="96x96" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-120.png" sizes="120x120" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-144.png" sizes="144x144" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-152.png" sizes="152x152" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-180.png" sizes="180x180" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-192.png" sizes="192x192" />
                <link rel="apple-touch-icon" href="assets/favicons/favicon-512.png" sizes="512x512" />
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content="Vagner Mengali" />
                <meta property="og:type" content="website" key="ogtype" />
                <meta property="og:url" content="https://vagnermengali.com/" />
                <meta property="og:image:alt" content={description} />
                <meta property="og:image" content="/assets/images/portfolio.webp" />
                <meta name="twitter:title" content="Vagner Mengali" />
                <meta name="twitter:site" content="@vagnermengali" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="/assets/images/portfolio.webp" />
                <meta name="twitter:description" content={description} />
                <meta property="al:ios:app_name" content="Vagner Mengali" />
                <meta property="al:ios:url" content="https://vagnermengali.com/" />
                <meta property="al:android:app_name" content="Vagner Mengali" />
                <meta property="al:android:url" content="https://vagnermengali.com/" />
                <link rel="canonical" href={`https://vagnermengali.com/${routes}`} />
                <meta name="theme-color" content="#101010" />
                <meta name="msapplication-TileColor" content="#101010" />
                <meta name="msapplication-navbutton-color" content="#101010" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#101010" />
                <link rel="manifest" href={"/manifest.webmanifest"} />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index, follow" />
            </Head>
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N3C9DL7C');`}
            </Script>
        </>
    );
};

export default Seo;
