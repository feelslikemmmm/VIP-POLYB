'use client';

import BettingCard from '@/components/home/betting-card';
import HeaderCard from '@/components/home/header-card';
import LoadingModal from '@/components/modals/loading-modal';
import { useBettingList } from '@/lib/hooks';
import { BettingList } from '@/types';

/**
 * 홈페이지 컴포넌트
 * @returns JSX.Element
 * @description 베팅 리스트를 표시하는 메인 홈페이지 컴포넌트
 */
export default function Home() {
  const { bettingList, isLoading, error } = useBettingList();

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
    <>
      <LoadingModal isOpen={isLoading} />
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
    </>
  );
}
