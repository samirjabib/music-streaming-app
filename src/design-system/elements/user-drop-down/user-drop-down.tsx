"use client";

import * as React from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";

import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/drop-down-menu";
import { Button } from "../ui/button";

const UserDropDown = ({ user }: { user?: User }) => {
  console.log(user, "user");
  const router = useRouter();

  // Create a Supabase client configured to use cookies
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
        <DropdownMenuItem>Ver perfil</DropdownMenuItem>
        <DropdownMenuItem>Favoritos</DropdownMenuItem>
        <DropdownMenuItem onClick={signOut}>Cerrar sesión</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
