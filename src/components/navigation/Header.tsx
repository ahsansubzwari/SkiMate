import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MapPin, Menu, User } from "lucide-react";

interface HeaderProps {
  resortName?: string;
  userAvatar?: string;
  userName?: string;
}

const Header = ({
  resortName = "Whistler Blackcomb",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=ski",
  userName = "Ski Enthusiast",
}: HeaderProps) => {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between fixed top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-blue-600">SkiMate</h1>
      </div>

      {/* Resort Location */}
      <div className="flex items-center gap-2 text-gray-600">
        <MapPin className="h-5 w-5" />
        <span className="hidden sm:inline">{resortName}</span>
      </div>

      {/* Profile Menu */}
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-8 w-8 rounded-full"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={userAvatar} alt={userName} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
