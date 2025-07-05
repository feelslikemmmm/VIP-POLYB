'use client';

import BettingDetailCard from '@/components/event/betting-detail-card';
import BettingForm from '@/components/event/betting-form';
import { use } from 'react';
import { useBettingDetail } from '@/lib/hooks';

interface BettingDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BettingDetail({ params }: BettingDetailProps) {
  const resolvedParams = use(params);
  const eventId = parseInt(resolvedParams.id);

  const {
    bettingEvent,
    selectedOptionId,
    selectedOption,
    betAmount,
    selectBettingOption,
    updateBetAmount,
  } = useBettingDetail(eventId);

  if (!bettingEvent) {
    return (
      <div className="flex-1 relative overflow-y-auto">
        <div className="relative z-10 p-4 md:p-8 pt-20 md:pt-8 min-h-full">
          <div className="text-red-500 text-center py-8">
            베팅 정보를 찾을 수 없습니다.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 relative overflow-y-auto">
      <div className="relative z-10 p-4 md:p-8 pt-20 md:pt-8 min-h-full">
        <div className="max-w-4xl space-y-6">
          <BettingDetailCard
            event={bettingEvent}
            selectedOptionId={selectedOptionId}
            onOptionSelect={selectBettingOption}
          />
          <BettingForm
            selectedOption={selectedOption}
            event={bettingEvent}
            betAmount={betAmount}
            onBetAmountChange={updateBetAmount}
          />
        </div>
      </div>
    </div>
  );
}
