import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

const Navigation = () => {
	const [session] = useSession();

	return (
		<header className="container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg">
			<Link href="/">
				<a href="" className="text4xl font-bold text-red-300">
					NextJS Startup
				</a>
			</Link>
			<nav className="ml-auto">
				<Link href="/about">
					<a className="mr-5">About</a>
				</Link>
				{session && session.accessToken ? (
					<>
						<Link href="/profile">
							<a className="mr-5">Profile</a>
						</Link>
						<div className="inline-block cursor-pointer" onClick={() => signOut()}>
							Logout
						</div>
					</>
				) : (
					<>
						<div className="inline-block cursor-pointer" onClick={() => signIn()}>
							Login
						</div>
					</>
				)}
			</nav>
		</header>
	);
};

export default Navigation;
