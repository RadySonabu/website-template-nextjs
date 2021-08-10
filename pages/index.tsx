import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "@fontsource/roboto";
import Navbar from "../components/Navbar";
import Drawer from "../components/Layout";
import Orders from "../components/Orders";
export default function Home() {
	return (
		<div>
			<h1>Masdasd</h1>
			<Orders />
		</div>
	);
}
