'use client';

import type React from 'react';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { usePathname } from 'next/navigation';
import SocialLinks from '@/components/social-links';
import Logo from '@/components/sidebar/logo';
import MainNav from '@/components/sidebar/main-nav';
import WalletInfomation from '@/components/sidebar/wallet-infomation';
import NavigationItem from '@/components/sidebar/navigation-item';
import Footer from '@/components/footer';
import WalletConnect from '@/components/sidebar/wallet-connect';

export function Sidebar() {
  const pathname = usePathname();
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const isActiveRoute = (route: string) => {
    if (pathname === '/' && route === '/poly-betting') {
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

  return (
    <div className="w-64 h-full bg-gray-800 border-r border-gray-700 flex flex-col overflow-hidden">
      <Logo />
      <MainNav isActiveRoute={isActiveRoute} />
      <div className="p-4 border-t border-gray-700 space-y-3 flex-shrink-0">
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
          <WalletInfomation handleWalletDisconnect={handleWalletDisconnect} />
        )}
        <SocialLinks />
        <Footer />
      </div>
    </div>
  );
}
