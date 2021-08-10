import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto";
import Layout from "../components/Layout";
import React, { FC } from "react";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
export default MyApp;
