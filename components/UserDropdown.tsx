"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";
import { signOut } from "@/lib/actions/auth.actions";

const UserDropdown = ({user}:{user:User}) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  // const user = {
  //   name: "John Doe",
  //   email: "contact.john@gmail.com",
  // };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fman-trading-computer&psig=AOvVaw0cXAWBejEVpZDrFhHCEI_M&ust=1760448947333000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOi8ysOloZADFQAAAAAdAAAAABAE" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start leading-none">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-800 border border-gray-700 text-gray-400">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fman-trading-computer&psig=AOvVaw0cXAWBejEVpZDrFhHCEI_M&ust=1760448947333000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOi8ysOloZADFQAAAAAdAAAAABAE" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600 hidden sm:block " />
        <nav className="sm:hidden">
            <NavItems />
        </nav>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          className="text-gray-100 text-md cursor-pointer font-medium focus:bg-transpaerent hover:bg-gray-700 focus:text-yellow-500 transition-colors"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4 hidden sm:block" />
          LogOut
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
