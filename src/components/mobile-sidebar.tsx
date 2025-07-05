'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@/components/ui/dialog';
import { Menu, Play } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Logo from '@/components/sidebar-mobile/logo';
import MainNav from '@/components/sidebar-mobile/main-nav';
import WalletConnect from '@/components/sidebar-mobile/wallet-connec';
import WalletInfomation from '@/components/sidebar-mobile/wallet-infomation';
import SocialLinks from '@/components/social-links';
import NavigationItem from '@/components/sidebar-mobile/navigation-item';
import Footer from '@/components/footer';

export function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const isActiveRoute = (route: string) => {
    if (pathname === '/' && route === '/') {
      return true;
    }
    return pathname === route;
  };

  const handleWalletConnect = () => {
    setIsWalletConnected(true);
  };

  const handleWalletDisconnect = () => {
    setIsWalletConnected(false);
  };

  const handleOpenChange = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-64 bg-gray-800 border-gray-700 p-0 flex flex-col h-full"
      >
        {/* 스크린리더 접근성을 위한 제목 숨김 */}
        <VisuallyHidden>
          <SheetTitle>모바일 네비게이션 메뉴</SheetTitle>
        </VisuallyHidden>

        {/* 상단 고정 영역 */}
        <div className="flex-shrink-0">
          <Logo />
          <MainNav
            isActiveRoute={isActiveRoute}
            handleOpenChange={handleOpenChange}
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 border-t border-gray-700 space-y-3">
            <NavigationItem
              href="https://vipgame.2tm.fun/"
              icon={Play}
              label="Play VIP"
              isActive={false}
              isExternal={true}
            />

            {!isWalletConnected ? (
              <WalletConnect handleWalletConnect={handleWalletConnect} />
            ) : (
              <WalletInfomation
                handleWalletDisconnect={handleWalletDisconnect}
              />
            )}
          </div>
        </div>

        <div className="flex-shrink-0 mt-auto">
          <SocialLinks />
          <Footer />
        </div>
      </SheetContent>
    </Sheet>
  );
}
