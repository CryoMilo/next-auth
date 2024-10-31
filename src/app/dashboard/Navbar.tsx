"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface NavbarProps {
	isAuthenticated: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
	return (
		<nav className="bg-background">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Link href="/" className="flex-shrink-0">
							<svg
								className="h-8 w-8 text-primary"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</Link>
					</div>
					<div className="flex items-center">
						<Button asChild className="mr-2">
							{isAuthenticated ? (
								<Link href="/auth/logout">Logout</Link>
							) : (
								<Link href="/auth/login">Login</Link>
							)}
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};
