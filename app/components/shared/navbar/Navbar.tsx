"use client";

import { Moon, Sun, Laptop, MoonStar } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function Component() {
	const { setTheme } = useTheme();

	return (
		<nav className="flex h-14 items-center justify-between bg-transparent px-4 lg:px-6">
			<div className="flex items-center">
				<Link href="/" prefetch={false} className="flex items-center">
					<span className="text-2xl font-bold">Logo</span>
				</Link>
			</div>
			<div className="hidden space-x-4 md:flex">
				<Link
					href="/"
					prefetch={false}
					className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
				>
					Home
				</Link>
				<Link
					href="/book-creation"
					prefetch={false}
					className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
				>
					Book Creation
				</Link>
				<Link
					href="/library"
					prefetch={false}
					className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
				>
					Library
				</Link>
			</div>
			<div className="flex items-center space-x-4">
				<Select>
					<SelectTrigger className="w-[100px]">
						<SelectValue placeholder="Language" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="en">English</SelectItem>
						<SelectItem value="es">Español</SelectItem>
					</SelectContent>
				</Select>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon">
							<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={() => setTheme("light")}>
							<Sun className="mr-2 h-4 w-4" />
							<span>Light</span>
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("dark")}>
							<MoonStar className="mr-2 h-4 w-4" />
							<span>Dark</span>
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("system")}>
							<Laptop className="mr-2 h-4 w-4" />
							<span>System</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<Button asChild>
					<Link href="/auth" prefetch={false}>
						Sign-in/Sign-up
					</Link>
				</Button>
			</div>
		</nav>
	);
}
