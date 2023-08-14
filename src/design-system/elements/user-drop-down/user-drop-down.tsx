"use client";

import * as React from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {  useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/drop-down-menu";
import { Button } from "../ui/button";
import Link from "next/link";

const UserDropDown = () => {
  const router = useRouter();

  const supabase = createClientComponentClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default">
          Perfil
          <CaretDownIcon className="relative h-[1.2rem] w-[1.2rem] left-2" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/dashboard/producer/account">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/dashboard/admin">Favoritos</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={signOut}>Cerrar sesión</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
