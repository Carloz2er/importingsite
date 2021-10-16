import Image from "next/image"
import Link from "next/link"
import { MutableRefObject } from "react"
import pigman from "../../public/ezgif-7-2d7872661596.png"

export default function Main({ link }) {
	function goTo(ref: MutableRefObject<any>) {
		window.scrollTo(0, ref.current.offsetTop)
	}

	return (
		<div className="Sobre flex justify-center mt-20">
			<div className="cinzaClaro flex text-center w-4/6 h-80 items-center overflow-hidden justify-around rounded-2xl p-5 xl:h-auto">
				<div className="flex flex-col w-1/2 xl:w-full">
					<h1 className="font-bold text-4xl mb-3">A melhor hospedagem de minecraft</h1>
					<div className=" text-xl">
						<h2>Crie seu servidor agora mesmo com quem entende do assunto!</h2>
						<h2>Qualidade e confiança, é na Coffe.</h2>
					</div>
					<div className="flex flex-row mt-10 font-semibold text-xl sm:text-base justify-evenly gap-5">
						<Link href="/minecraft" passHref>
							<button className="cinza2 py-4 px-6 rounded-2xl">Ver Plano</button>
						</Link>
						<button className="cinza2 py-4 px-5 rounded-2xl" onClick={(e) => goTo(link)}>
							Sobre A Empresa
						</button>
					</div>
				</div>
				<div className="xl:hidden">
					<Image src={pigman} alt="Erro" />
				</div>
			</div>
		</div>
	)
}
