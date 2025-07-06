'use client';

import type React from 'react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import SocialLinks from '@/components/social-links';
import Logo from '@/components/sidebar/logo';
import MainNav from '@/components/sidebar/main-nav';
import WalletInfomation from '@/components/sidebar/wallet-infomation';
import NavigationItem from '@/components/sidebar/navigation-item';
import Footer from '@/components/footer';
import WalletConnect from '@/components/sidebar/wallet-connect';

/**
 * 사이드바 컴포넌트
 * @returns JSX.Element
 * @description 애플리케이션의 메인 사이드바, 네비게이션과 지갑 연결 기능을 포함
 */
export function Sidebar() {
  const pathname = usePathname();
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  /**
   * 현재 경로가 활성 상태인지 확인하는 함수
   * @param route - 확인할 경로
   * @returns 활성 상태 여부
   * @description 현재 URL과 비교하여 네비게이션 메뉴의 활성 상태를 결정
   */
  const isActiveRoute = (route: string) => {
    if (pathname === '/' && route === '/poly-betting') {
      return true;
    }
    return pathname === route;
  };

  /**
   * 지갑 연결 처리 함수
   * @description 지갑 연결 상태를 true로 변경
   */
  const handleWalletConnect = () => {
    setIsWalletConnected(true);
  };

  /**
   * 지갑 연결 해제 처리 함수
   * @description 지갑 연결 상태를 false로 변경
   */
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
          iconUrl="/sidebar_05.png"
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
