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

/**
 * 베팅 폼 컴포넌트
 * @param selectedOption - 선택된 베팅 옵션
 * @param event - 베팅 이벤트 정보
 * @param betAmount - 베팅 금액
 * @param onBetAmountChange - 베팅 금액 변경 함수
 * @returns JSX.Element
 * @description 베팅 금액 입력과 거래 모달을 관리하는 폼 컴포넌트
 */
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

  /**
   * 거래 모달을 여는 함수
   * @description 베팅 버튼 클릭 시 거래 모달을 열어 거래 프로세스를 시작
   */
  const openTradeModal = () => {
    setIsModalOpen(true);
  };

  /**
   * 거래 모달을 닫는 함수
   * @description 거래 완료 또는 취소 시 모달을 닫음
   */
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
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <label className="text-gray-300 text-sm min-w-fit">Amount</label>
              <div className="flex items-center gap-2 flex-1">
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
          </div>

          <div className="text-gray-300 space-y-1">
            <p>현재 배당률: {currentOdds}x</p>
            <p>
              총 배팅 금액: {formatNumberWithCommas(event.bettingAmount)} VIP
            </p>
          </div>

          {betAmount && isBetAmountValid(betAmount) && (
            <div className="flex items-center gap-3">
              <label className="text-gray-300 text-sm min-w-fit">To Win</label>
              <div className="flex items-center gap-2">
                <span className="text-white">{potentialWin}</span>
                <span className="text-gray-300">VIP</span>
              </div>
            </div>
          )}

          <Button
            className="w-full py-3 text-lg cursor-pointer bg-red-500 text-white disabled:bg-red-500 disabled:text-white disabled:opacity-100"
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
