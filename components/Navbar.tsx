'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { useMediaQuery } from '@/hooks/use-media-query'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from './ui/drawer'
import { MenuIcon, XIcon, ChevronRightIcon } from 'lucide-react'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'

const components: { title: string; href: string }[] = [
  { title: 'América', href: '/' },
  { title: 'Europa', href: '/' },
  { title: 'Asia', href: '/' },
]

const Navbar = () => {
  const isDesktop = useMediaQuery('(min-width: 900px)')

  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // Change `50` to adjust when the navbar changes color
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isDesktop ? (
    <header
      className={`fixed left-0 top-0 z-20 w-full transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'} py-4`}
    >
      <div className="inner-section">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src={isScrolled ? '/logo-color-cr.png' : '/logo-white-cr.png'}
              alt="Pangea Travel Logo"
              width={334}
              height={210}
              className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-20'}`}
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isScrolled
                      ? 'text-black hover:text-primary-green'
                      : 'text-white hover:text-primary-green'
                  )}
                >
                  <Link href="/">
                    <NavigationMenuTrigger isScrolled={isScrolled}>
                      Tours Internacionales
                    </NavigationMenuTrigger>
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
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isScrolled
                      ? 'text-black hover:text-primary-green'
                      : 'text-white hover:text-primary-green'
                  )}
                >
                  <Link href="/">Tours de Fútbol</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isScrolled
                      ? 'text-black hover:text-primary-green'
                      : 'text-white hover:text-primary-green'
                  )}
                >
                  <Link href="/">Conócenos</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isScrolled
                      ? 'text-black hover:text-primary-green'
                      : 'text-white hover:text-primary-green'
                  )}
                >
                  <Link href="/">Contáctanos</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  ) : (
    <header
      className={`fixed left-0 top-0 z-20 flex w-full flex-row items-center justify-between px-10 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'} py-4`}
    >
      <Link href="/">
        <Image
          src={isScrolled ? '/logo-color-cr.png' : '/logo-white-cr.png'}
          alt="Pangea Travel Logo"
          width={200}
          height={100}
        />
      </Link>
      <Drawer direction="top">
        <DrawerTrigger asChild>
          <MenuIcon
            color={isScrolled ? '#000000' : '#FFFFFF'}
            className="h-10 w-10"
          />
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-row items-center justify-between bg-primary-blue px-10 py-4">
            <Link href="/">
              <Image
                src="/logo-white-cr.png"
                alt="Pangea Travel Logo"
                width={200}
                height={100}
              />
            </Link>
            <DrawerClose>
              <XIcon color="#FFFFFF" className="h-10 w-10" />
            </DrawerClose>
          </div>

          <nav className="grid gap-4 px-10 py-10">
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex items-center gap-2 text-lg font-medium">
                Tours Internacionales
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="grid gap-4 bg-muted px-6 py-4">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium"
                    prefetch={false}
                  >
                    América
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium"
                    prefetch={false}
                  >
                    Europa
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium"
                    prefetch={false}
                  >
                    Asia
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-medium"
              prefetch={false}
            >
              Tours de Fútbol
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-medium"
              prefetch={false}
            >
              Conócenos
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-medium"
              prefetch={false}
            >
              Contáctanos
            </Link>
          </nav>
        </DrawerContent>
      </Drawer>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {
    title: string
    isScrolled: boolean
  }
>(({ className, title, isScrolled, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            `block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-green hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`,
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default Navbar
