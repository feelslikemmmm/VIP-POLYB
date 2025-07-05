import React from 'react';
import NavigationItem from '@/components/sidebar-mobile/navigation-item';
import { DollarSign, FileText, Gift, Trophy } from 'lucide-react';

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
          icon={Trophy}
          label="Poly Betting"
          isActive={isActiveRoute('/')}
          onClick={handleOpenChange}
        />
        <NavigationItem
          href="/log"
          icon={FileText}
          label="Log"
          isActive={isActiveRoute('/log')}
          onClick={handleOpenChange}
        />
        <NavigationItem
          href="/reward"
          icon={Gift}
          label="Reward"
          isActive={isActiveRoute('/reward')}
          onClick={handleOpenChange}
        />
        <NavigationItem
          href="/get-vip"
          icon={DollarSign}
          label="Get $VIP"
          isActive={isActiveRoute('/get-vip')}
          onClick={handleOpenChange}
        />
      </div>
    </nav>
  );
}
