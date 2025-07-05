'use client';

import BettingCard from '@/components/home/betting-card';
import HeaderCard from '@/components/home/header-card';
import { useBettingList } from '@/lib/hooks';
import { BettingList } from '@/types';

export default function Home() {
  const { bettingList, isLoading, error } = useBettingList();

  if (isLoading) {
    return (
      <div className="flex-1 relative overflow-y-auto">
        <div className="relative z-10 p-4 md:p-8 pt-20 md:pt-8 min-h-full">
          <div className="text-white text-center py-8">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 relative overflow-y-auto">
        <div className="relative z-10 p-4 md:p-8 pt-20 md:pt-8 min-h-full">
          <div className="text-red-500 text-center py-8">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 relative overflow-y-auto">
      <div className="relative z-10 p-4 md:p-8 pt-20 md:pt-8 min-h-full">
        <HeaderCard />
        <div className="space-y-4 md:space-y-6 max-w-4xl">
          {bettingList.map((event: BettingList) => (
            <BettingCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
