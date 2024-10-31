import { Navbar } from "./Navbar";
import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";
import { redirect } from "next/navigation";

const Dashboard = async () => {
	const isAuthenticated = await checkIsAuthenticated();

	if (!isAuthenticated) {
		redirect("/auth/login");
	} else
		return (
			<div>
				<Navbar isAuthenticated={isAuthenticated} />
			</div>
		);
};

export default Dashboard;
