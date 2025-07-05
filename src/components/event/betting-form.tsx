import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BettingList, BettingOption } from '@/types';
import { calculateOdds } from '@/lib/betting-data';
import { useState } from 'react';
import { TradeModal } from '@/components/modals/trade-modal';
import {
  formatNumberWithCommas,
  isBetAmountValid,
  calculatePotentialWin,
} from '@/lib/utils';

interface BettingFormProps {
  selectedOption: BettingOption | null;
  event: BettingList;
  betAmount: string;
  onBetAmountChange: (value: string) => void;
}

export default function BettingForm({
  selectedOption,
  event,
  betAmount,
  onBetAmountChange,
}: BettingFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!selectedOption) {
    return (
      <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
        <CardContent className="p-4 md:p-6">
          <div className="text-gray-300 text-center">옵션을 선택해주세요.</div>
        </CardContent>
      </Card>
    );
  }

  const currentOdds = calculateOdds(event, selectedOption.amount);
  const potentialWin = calculatePotentialWin(betAmount, currentOdds);
  const isButtonDisabled = !isBetAmountValid(betAmount);

  const openTradeModal = () => {
    setIsModalOpen(true);
  };

  const closeTradeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white text-lg">
            {selectedOption.name} 배팅
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 text-sm">amount</label>
              <div className="flex items-center gap-2 mt-1">
                <Input
                  type="number"
                  value={betAmount}
                  onChange={(e) => onBetAmountChange(e.target.value)}
                  placeholder="0"
                  className="bg-gray-700 border-gray-600 text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="text-gray-300">VIP</span>
              </div>
            </div>
            <div>
              <label className="text-gray-300 text-sm">to win</label>
              <div className="flex items-center gap-2 mt-1">
                <Input
                  type="text"
                  value={potentialWin}
                  readOnly
                  className="bg-gray-700 border-gray-600 text-white"
                />
                <span className="text-gray-300">VIP</span>
              </div>
            </div>
          </div>

          <div className="text-gray-300 space-y-1">
            <p>현재 배당률: {currentOdds}x</p>
            <p>
              총 배팅 금액: {formatNumberWithCommas(event.bettingAmount)} VIP
            </p>
          </div>

          <Button
            className={`w-full py-3 text-lg cursor-pointer ${
              isButtonDisabled
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-cyan-500 hover:bg-cyan-600 text-white'
            }`}
            onClick={openTradeModal}
            disabled={isButtonDisabled}
          >
            Trade
          </Button>
        </CardContent>
      </Card>
      <TradeModal
        isOpen={isModalOpen}
        onClose={closeTradeModal}
        selectedOption={selectedOption}
        betAmount={betAmount}
      />
    </>
  );
}
