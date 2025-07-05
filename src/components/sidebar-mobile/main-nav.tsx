import React from 'react';
import NavigationItem from '@/components/sidebar-mobile/navigation-item';

interface MainNavProps {
  isActiveRoute: (route: string) => boolean;
  handleOpenChange: () => void;
}

export default function MainNav({
  isActiveRoute,
  handleOpenChange,
}: MainNavProps) {
  return (
    <nav className="flex-1 p-4">
      <div className="space-y-2">
        <NavigationItem
          href="/"
          iconUrl="/sidebar_01.png"
          label="Poly Betting"
          isActive={isActiveRoute('/')}
          onClick={handleOpenChange}
        />
        <NavigationItem
          href="/log"
          iconUrl="/sidebar_02.png"
          label="Log"
          isActive={isActiveRoute('/log')}
          onClick={handleOpenChange}
        />
        <NavigationItem
          href="/reward"
          iconUrl="/sidebar_03.png"
          label="Reward"
          isActive={isActiveRoute('/reward')}
          onClick={handleOpenChange}
        />
        <NavigationItem
          href="/get-vip"
          iconUrl="/sidebar_04.png"
          label="Get $VIP"
          isActive={isActiveRoute('/get-vip')}
          onClick={handleOpenChange}
        />
      </div>
    </nav>
  );
}
