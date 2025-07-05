import { BettingList } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { getButtonStyleByIndex } from '@/lib/utils';

interface BettingCardProps {
  event: BettingList;
}

export default function BettingCard({ event }: BettingCardProps) {
  const { id, title, options } = event;
  const router = useRouter();

  const navigateToEventDetail = () => {
    router.push(`/event/${id}`);
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
              onClick={navigateToEventDetail}
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
