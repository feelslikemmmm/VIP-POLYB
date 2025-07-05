import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Share2 } from 'lucide-react';
import { BettingList, BettingOption } from '@/types';
import { useRouter } from 'next/navigation';
import { calculateOdds } from '@/lib/betting-data';
import { getButtonStyleByIndex, formatNumberWithCommas } from '@/lib/utils';

interface BettingDetailCardProps {
  event: BettingList;
  selectedOptionId: number;
  onOptionSelect: (option: BettingOption) => void;
}

export default function BettingDetailCard({
  event,
  selectedOptionId,
  onOptionSelect,
}: BettingDetailCardProps) {
  const router = useRouter();
  const { title, options, bettingAmount, bettingEndDate, totalParticipants } =
    event;

  const navigateToHome = () => {
    router.push('/');
  };

  const shareEvent = async () => {
    const shareData = {
      title: `VIP PolyB ${title}`,
      text: `Betting NOW!`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // 공유 API를 지원하지 않는 경우 클립보드에 복사
        await navigator.clipboard.writeText(window.location.href);
        alert('링크가 클립보드에 복사되었습니다!');
      }
    } catch (error) {
      console.error('공유 실패:', error);
    }
  };

  return (
    <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <CardTitle className="text-white text-lg md:text-xl">
            {title}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={shareEvent}
            className="text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={navigateToHome}
          className="text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-gray-300 space-y-1">
          <p>배팅 종료일: {bettingEndDate}</p>
          <p>배팅 인원: {formatNumberWithCommas(totalParticipants)}명</p>
          <p>총 배팅 금액: {formatNumberWithCommas(bettingAmount)}VIP</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {options.map((option, index) => {
            const calculatedOdds = calculateOdds(event, option.amount);
            const isSelected = selectedOptionId === option.id;

            return (
              <Button
                key={option.id}
                onClick={() => onOptionSelect(option)}
                className={`text-white py-3 cursor-pointer ${getButtonStyleByIndex(
                  index
                )} ${isSelected ? 'ring-2 ring-white' : ''}`}
              >
                {option.name} ({calculatedOdds})
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
