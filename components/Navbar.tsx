"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './ui/CustomButton';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string }[] = [
    { title: "América", href: "/" },
    { title: "Europa", href: "/" },
    { title: "Asia", href: "/" }
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Change `50` to adjust when the navbar changes color
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 z-10 w-full transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'} py-4`}>
            <div className="flex justify-between items-center px-60">
                <Link href="/">
                    <Image
                        src={isScrolled ? "/logo-color-cr.png" : "/logo-white-cr.png"} // Dynamically change logo
                        alt="Pangea Travel Logo"
                        width={334}
                        height={210}
                        className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-20'}`} // Shrinks the logo on scroll
                    />
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className={isScrolled ? 'text-black' : 'text-white'}> {/* Change text color on scroll */}
                                    <NavigationMenuTrigger>Tours Internacionales</NavigationMenuTrigger>
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuContent>
                                <ul className="w-[200px] p-4">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                            isScrolled={isScrolled} // Pass scroll state as prop
                                        />
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Additional Menu Items */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), isScrolled ? 'text-black' : 'text-white')}>
                                <Link href="/">
                                    Tours de Fútbol
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), isScrolled ? 'text-black' : 'text-white')}>
                                <Link href="/" className={isScrolled ? 'text-black' : 'text-white'}>
                                    Conócenos
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), isScrolled ? 'text-black' : 'text-white')}>
                                <Link href="/" className={isScrolled ? 'text-black' : 'text-white'}>
                                    Contáctanos
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
};

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string; isScrolled: boolean }
>(({ className, title, isScrolled, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            `block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors
            hover:bg-primary-green hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`,
            className, isScrolled ? 'text-black' : 'text-white' 
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;

