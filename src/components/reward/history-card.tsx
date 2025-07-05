import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

interface HistoryCardProps {
  bet: {
    id: number;
    title: string;
    selectedOption: string;
    amount: number;
    toWin: number;
    odds: number;
    bettingDate: string;
    status: string;
    claimed: boolean;
  };
  shareEvent: (betTitle: string) => void;
  handleClaim: (id: number) => void;
}

export default function HistoryCard({
  bet,
  shareEvent,
  handleClaim,
}: HistoryCardProps) {
  return (
    <Card
      key={bet.id}
      className={`bg-gray-800/80 border-gray-700 backdrop-blur-sm ${
        bet.status === 'WIN'
          ? 'border-cyan-400'
          : bet.status === 'LOSE'
          ? 'border-red-400'
          : ''
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-white text-base md:text-lg">
              {bet.title}
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => shareEvent(bet.title)}
              className="text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
          {bet.status === 'WIN' && (
            <div className="text-cyan-400 font-bold text-lg">WIN!!</div>
          )}
          {bet.status === 'LOSE' && (
            <div className="text-red-400 font-bold text-lg">LOSE</div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Selected Option */}
        <div>
          <Button
            className={`${
              bet.selectedOption === 'YES'
                ? 'bg-blue-500'
                : bet.selectedOption === 'NO'
                ? 'bg-red-500'
                : 'bg-cyan-500'
            } text-white px-6 py-2 cursor-default`}
          >
            {bet.selectedOption}
          </Button>
        </div>

        {/* Betting Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-gray-300 text-sm">Amount</div>
            <div className="text-red-400 font-bold">
              {bet.amount.toLocaleString()} VIP
            </div>
          </div>
          <div>
            <div className="text-gray-300 text-sm">To win</div>
            <div className="text-cyan-400 font-bold">
              {bet.toWin.toLocaleString()} VIP
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-gray-300 text-sm space-y-1">
          <p>배당률 : {bet.odds}</p>
          <p>배팅일 : {bet.bettingDate}</p>
        </div>

        {/* Action Button - WIN 상태일 때만 표시 */}
        {bet.status === 'WIN' && !bet.claimed && (
          <Button
            onClick={() => handleClaim(bet.id)}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2"
          >
            Claim
          </Button>
        )}
        {bet.status === 'WIN' && bet.claimed && (
          <div className="text-center text-gray-400 py-2 font-medium">
            Claimed
          </div>
        )}
        {/* LOSE 상태일 때는 아무것도 표시하지 않음 */}
      </CardContent>
    </Card>
  );
}
