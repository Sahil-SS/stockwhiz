import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";
import { searchStocks } from "@/lib/actions/finnhub.action";

const Header = async({user}:{user:User}) => {
  const intitialStocks = await searchStocks()
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={150}
            height={50}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems initialStocks={intitialStocks} />
        </nav>
        <UserDropdown user={user} initialStocks={intitialStocks}/>
      </div>
    </header>
  );
};

export default Header;
