import Navigation from "./navigation";

const Layout = (props) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navigation />
			<main className="cotainer flex flex-1 justify-center mx-auto px-5 max-w-screen-lg">{props.children}</main>
			<footer className="flex items-center justify-center w-full h-20 text-sm border-t">
				@ 2021 NextJS Startup
			</footer>
		</div>
	);
};

export default Layout;
