"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: 1,
    name: 'início',
    path: '/'
  },
  {
    id: 2,
    name: 'produtos',
    path: '/produtos'
  },
  {
    id: 3,
    name: 'categorias',
    path: '/categorias'
  },
  {
    id: 4,
    name: 'minha conta',
    path: '/conta'
  },
  {
    id: 5,
    name: 'carrinho',
    path: '/carrinho'
  },
]

import React from "react"

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {navLinks.map((link) => {
        return (
          <Link href={link.path} key={link.id}
            className={`${link.path === pathname && "text-accent"}
            capitalize font-medium hover:text-accent translation-all`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav