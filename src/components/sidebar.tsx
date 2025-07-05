'use client';

import { Button } from '@/components/ui/button';
import {
  Trophy,
  FileText,
  Gift,
  DollarSign,
  Play,
  Wallet,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItemProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
}

function NavigationItem({
  href,
  icon: Icon,
  label,
  isActive,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-300 hover:text-white hover:bg-gray-700'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  const isActiveRoute = (route: string) => {
    // 루트 경로('/')일 때 Poly Betting이 활성화되도록 설정
    if (pathname === '/' && route === '/') {
      return true;
    }
    return pathname === route;
  };

  return (
    <div className="w-64 h-full bg-gray-800 border-r border-gray-700 flex flex-col overflow-hidden">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <Star className="w-5 h-5 text-gray-900" />
          </div>
          <span className="text-xl font-bold text-white">VIP POLYB</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          <NavigationItem
            href="/"
            icon={Trophy}
            label="Poly Betting"
            isActive={isActiveRoute('/')}
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

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-700 space-y-3 flex-shrink-0">
        <NavigationItem
          href="/play-vip"
          icon={Play}
          label="Play VIP"
          isActive={isActiveRoute('/play-vip')}
        />

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
          <Wallet className="w-4 h-4 mr-2" />
          KAIA WALLET LOGIN
        </Button>

        <div className="text-xs text-gray-500 text-center pt-2">
          © 2025 VIP All Rights Reserved
        </div>
      </div>
    </div>
  );
}
