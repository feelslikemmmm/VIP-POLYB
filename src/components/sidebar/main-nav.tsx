import NavigationItem from '@/components/sidebar/navigation-item';
import { DollarSign, FileText, Gift, Trophy } from 'lucide-react';

interface MainNavProps {
  isActiveRoute: (route: string) => boolean;
}

export default function MainNav({ isActiveRoute }: MainNavProps) {
  return (
    <nav className="flex-1 p-4 overflow-y-auto">
      <div className="space-y-2">
        <NavigationItem
          href="/"
          icon={Trophy}
          label="Poly Betting"
          isActive={isActiveRoute('/poly-betting')}
        />
        <NavigationItem
          href="/log"
          icon={FileText}
          label="Log"
          isActive={isActiveRoute('/log')}
        />
        <NavigationItem
          href="/reward"
          icon={Gift}
          label="Reward"
          isActive={isActiveRoute('/reward')}
        />
        <NavigationItem
          href="/get-vip"
          icon={DollarSign}
          label="Get $VIP"
          isActive={isActiveRoute('/get-vip')}
        />
      </div>
    </nav>
  );
}
