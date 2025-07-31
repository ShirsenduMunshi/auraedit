"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggel";
import MobileNavSheet from "./MobileNavSheet";
import { usePathname } from "next/navigation";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { Authenticated, Unauthenticated } from "convex/react";
import { LayoutDashboard } from "lucide-react";
const Navbar = () => {
  const path = usePathname();
  const { isLoading } = useStoreUser();

  if (path.includes("editor")) {
    return null; // Hide Navbar on editor pages
  }
  return (
    <header className="rounded-3xl mx-auto fixed top-0 left-0 w-full z-50 backdrop-blur-md dark:bg-white/20 bg-black/10 border-b border-border shadow-sm">
      <nav className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold tracking-wide select-none">
          <Link href={"/"}>
            <span className="font-extrabold alex-brush-regular">A</span>
            <span className="cascadia-code">ura</span>
            <span className="font-extrabold alex-brush-regular">E</span>
            <span className="cascadia-code">dit</span>
          </Link>
        </div>

        {/* Desktop Links */}
        {path === "/" && (
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#features" className="hover:underline underline-offset-4 cascadia-code">
              Features
            </Link>
            <Link href="#Pricing" className="hover:underline underline-offset-4 cascadia-code">
              Pricing
            </Link>
            <Link href="#contact" className="hover:underline underline-offset-4 cascadia-code">
              Contact
            </Link>
          </div>
        )}
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Unauthenticated>
            <SignInButton >
              <Button variant="glassy">Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="primary">Get Started</Button>
            </SignUpButton>
          </Unauthenticated>
          <Authenticated>
            <Link className="flex justify-center items-center" href={"/dashboard"}><Button variant={"glassy"} ><LayoutDashboard className="h-4 w-4" />Dashboard</Button></Link>
            <UserButton appearance={{
              elements: {
                userButtonAvatarBox: "w-10 h-10",
                userButtonAvatarImage: "rounded-full",
              },
            }} />
          </Authenticated>
          <ModeToggle />
        </div>
        {isLoading && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex items-center justify-center rounded-3xl">
            <BarLoader width={"97%"} color="#06b6d4"/>
          </div>
        )}

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <MobileNavSheet />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
