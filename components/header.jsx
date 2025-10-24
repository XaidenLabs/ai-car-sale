import React from "react";
import { Button } from "./ui/button";
import { Heart, CarFront, Layout, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return (
    <header
      className="px-10 fixed top-0 w-full z-50 border-b border-orange-600/20 shadow-lg backdrop-blur-md"
      style={{
        background:
          "linear-gradient(135deg, rgba(20,19,17,0.9) 0%, rgba(138,48,5,0.85) 40%, rgba(0,0,0,0.9) 100%)",
      }}
    >
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? '/admin' : '/'} className="flex items-center gap-2">
          <Image
            src={"/mainlogo.png"}
            alt="Vehiql Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          />
          {isAdminPage && (
            <span className="text-sm font-semibold uppercase text-orange-300 bg-orange-800/20 px-2 py-1 rounded-md border border-orange-600/40">
              Admin
            </span>
          )}
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {isAdminPage ? (
            <>
              <Link href="/">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-orange-500 text-orange-200 hover:bg-orange-600/20 transition-all"
                >
                  <ArrowLeft size={18} />
                  <span>Back to App</span>
                </Button>
              </Link>
            </>
          ) : (
            <SignedIn>
              {!isAdmin && (
                <Link
                  href="/reservations"
                  className="text-gray-300 hover:text-orange-300 flex items-center gap-2"
                >
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 border-orange-600/40 text-orange-100 hover:bg-orange-700/20 hover:border-orange-500 transition-all"
                  >
                    <CarFront size={18} />
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
              )}
              <Link href="/saved-cars">
                <Button className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:opacity-90 text-white shadow-lg hover:shadow-orange-700/40 transition-all duration-300">
                  <Heart size={18} />
                  <span className="hidden md:inline">Saved Cars</span>
                </Button>
              </Link>
              {isAdmin && (
                <Link href="/admin">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 border-orange-500 text-black hover:bg-orange-600/20 hover:text-white transition-all"
                  >
                    <Layout size={18} />
                    <span className="hidden md:inline">Admin Portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

          <SignedOut>
            {!isAdminPage && (
              <SignInButton forceRedirectUrl="/">
                <Button
                  variant="outline"
                  className="border-orange-600/40 text-orange-100 hover:bg-orange-700/20 hover:border-orange-500 transition-all"
                >
                  Login
                </Button>
              </SignInButton>
            )}
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-10 h-10 ring-2 ring-orange-400/60 hover:ring-orange-300 transition-all duration-300 shadow-md",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
