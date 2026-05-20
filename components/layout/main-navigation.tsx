"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const markets: { title: string; href: string; description: string }[] = [
  {
    title: "Equine",
    href: "/cryotherapy/equine",
    description:
      "Focused cold therapy wherever the horse is working. Barns, trailers, or training environments.",
  },
  {
    title: "Clinics & Chiropractic",
    href: "/cryotherapy/clinics",
    description:
      "Add recovery to your treatment rooms without rebuilding the clinic.",
  },
  {
    title: "Sports Recovery",
    href: "/cryotherapy/sports-recovery",
    description:
      "Portable targeted recovery that travels with teams and athletes.",
  },
  {
    title: "Wellness & Medspa",
    href: "/cryotherapy/medspa",
    description:
      "A premium treatment with grounded claims for your service menu.",
  },
]

export function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/cryogun">Device</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-2 md:w-[600px] md:grid-cols-2">
              {markets.map((market) => (
                <ListItem
                  key={market.title}
                  title={market.title}
                  href={market.href}
                >
                  {market.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[500px] grid-cols-3 gap-6 p-4">
              <div>
                <h3 className="mb-2 px-3 text-sm font-medium text-muted-foreground">Learn</h3>
                <ul>
                  <ListItem href="/training" title="Training" />
                  <ListItem href="/support" title="Support" />
                  <ListItem href="/cryotherapy-science" title="The Science" />
                </ul>
              </div>
              <div>
                <h3 className="mb-2 px-3 text-sm font-medium text-muted-foreground">Info</h3>
                <ul>
                  <ListItem href="/blog" title="Blog" />
                  <ListItem href="/case-studies" title="Case Studies" />
                  <ListItem href="/videos" title="Videos" />
                </ul>
              </div>
              <div>
                <h3 className="mb-2 px-3 text-sm font-medium text-muted-foreground">Company</h3>
                <ul>
                  <ListItem href="/about" title="About" />
                  <ListItem href="/contact" title="Contact" />
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="flex flex-col justify-center gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            {children && <div className="line-clamp-2 text-muted-foreground">{children}</div>}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
