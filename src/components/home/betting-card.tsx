import { BettingList } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { getButtonStyleByIndex } from '@/lib/utils';

interface BettingCardProps {
  event: BettingList;
}

/**
 * 베팅 카드 컴포넌트
 * @param event - 베팅 이벤트 정보
 * @returns JSX.Element
 * @description 홈페이지에서 각 베팅 이벤트를 카드 형태로 표시하는 컴포넌트
 */
export default function BettingCard({ event }: BettingCardProps) {
  const { id, title, options } = event;
  const router = useRouter();

  /**
   * 베팅 이벤트 상세 페이지로 이동하는 함수
   * @param optionId - 선택한 베팅 옵션 ID
   * @description 사용자가 베팅 옵션을 클릭했을 때 해당 이벤트의 상세 페이지로 라우팅하며, 선택한 옵션을 쿼리 파라미터로 전달
   */
  const navigateToEventDetail = (optionId: number) => {
    router.push(`/event/${id}?selectedOption=${optionId}`);
  };

  return (
    <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
      <CardHeader className="pb-3 md:pb-6">
        <CardTitle className="text-white text-base md:text-lg">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          {options.map((option, index) => (
            <Button
              key={option.id}
              onClick={() => navigateToEventDetail(option.id)}
              className={`flex-1 text-white py-3 cursor-pointer ${getButtonStyleByIndex(
                index
              )}`}
            >
              {option.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
