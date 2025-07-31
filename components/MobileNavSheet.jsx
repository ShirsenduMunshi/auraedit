'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import Link from 'next/link';
import { DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Authenticated, Unauthenticated } from 'convex/react';
import { LayoutDashboard } from "lucide-react";
import { ModeToggle } from './ModeToggel';

export default function MobileNavSheet() {
    const { setTheme, theme } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <DialogTitle>
                <VisuallyHidden>Dialog Title</VisuallyHidden>
            </DialogTitle>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>

            <SheetContent
                side="left"
                className="w-[90vw] bg-black/30 dark:bg-white/10 backdrop-blur-lg border-none shadow-xl transition-all duration-500 ease-in-out"
            >
                <div className="flex flex-col justify-between h-full py-6 px-4">
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white dark:text-white"><span className='alex-brush-regular'>A</span><span className='cascadia-code'>ura</span><span className='alex-brush-regular'>E</span><span className='cascadia-code'>dit</span></h2>
                            <Button
                                variant="outline"
                                size="icon"
                                className="self-start mt-2 text-white border-white hover:bg-white/10"
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </Button>
                        </div>

                        <nav className="flex flex-col gap-4 text-lg font-medium text-white dark:text-white">
                            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
                            <Authenticated>
                                <Link href={"/dashboard"}><Button variant={"glassy"} className="flex justify-center items-center" ><LayoutDashboard className="h-4 w-4" />Dashboard</Button></Link>
                                </Authenticated>
                                </nav>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <Unauthenticated>
                                        <SignInButton >
                                            <Button variant="glassy">Sign In</Button>
                                        </SignInButton>
                                        <SignUpButton>
                                            <Button variant="primary">Get Started</Button>
                                        </SignUpButton>
                                    </Unauthenticated>
                                    <Authenticated>
                                        <UserButton appearance={{
                                            elements: {
                                                userButtonAvatarBox: "w-10 h-10",
                                                userButtonAvatarImage: "rounded-full",
                                            },
                                        }} />
                                    </Authenticated>
                                    <ModeToggle />
                                </div>


                            </div>
                    </div>
            </SheetContent>
        </Sheet>
    );
}
