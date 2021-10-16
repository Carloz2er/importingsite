import "../styles/globals.scss"
import "tailwindcss/tailwind.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>CoffeHost</title>
				<link rel="icon" type="image/ico" sizes="16x16" href="/coffe.ico" />
				<meta name="description" content="Minecraft host a um preço super gostoso." />
				<meta name="author" content="Coco Blanco" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
