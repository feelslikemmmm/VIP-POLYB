'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  Star,
  Trophy,
  FileText,
  Gift,
  DollarSign,
  Play,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white cursor-pointer"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-64 bg-gray-800 border-gray-700 p-0"
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-gray-900" />
            </div>
            <span className="text-xl font-bold text-white">VIP POLYB</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Link
              href="/poly-betting"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              <Trophy className="w-5 h-5" />
              <span>Poly Betting</span>
            </Link>

            <Link
              href="/log"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              <FileText className="w-5 h-5" />
              <span>Log</span>
            </Link>

            <Link
              href="/reward"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              <Gift className="w-5 h-5" />
              <span>Reward</span>
            </Link>

            <Link
              href="/get-vip"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              <DollarSign className="w-5 h-5" />
              <span>Get $VIP</span>
            </Link>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-700 space-y-3">
          <Link
            href="/play-vip"
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            onClick={() => setOpen(false)}
          >
            <Play className="w-5 h-5" />
            <span>Play VIP</span>
          </Link>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
            <Wallet className="w-4 h-4 mr-2" />
            KAIA WALLET LOGIN
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
