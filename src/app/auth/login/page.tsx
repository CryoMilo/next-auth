import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

const Login: React.FC = async () => {
	const isAuthenticated = false;

	if (isAuthenticated) {
		redirect("/dashboard");
	} else
		return (
			<div className="h-full mx-10 grid place-items-center">
				<LoginForm />
			</div>
		);
};

export default Login;
