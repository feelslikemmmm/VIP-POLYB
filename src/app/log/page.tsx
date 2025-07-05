'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import HeaderCard from '@/components/header-card';
import WalletConnect from '@/components/wallet-connect';

// Mock data - 실제로는 API에서 가져올 데이터
const mockBettingHistory = [
  {
    id: 1,
    title: '이스라엘-이란 휴전 7월 내로 된다.',
    selectedOption: 'YES',
    amount: 100000,
    toWin: 150000,
    odds: 1.5,
    bettingDate: '2025-07-03 00:00:00',
    status: 'WIN', // WIN, LOSE, PENDING
  },
  {
    id: 2,
    title: '이스라엘-이란 휴전 7월 내로 된다.',
    selectedOption: 'YES',
    amount: 100000,
    toWin: 150000,
    odds: 1.5,
    bettingDate: '2025-07-03 00:00:00',
    status: 'LOSE',
  },
  {
    id: 3,
    title: '이스라엘-이란 휴전 7월 내로 된다.',
    selectedOption: 'YES',
    amount: 100000,
    toWin: 150000,
    odds: 1.5,
    bettingDate: '2025-07-03 00:00:00',
    status: 'WIN',
  },
  {
    id: 4,
    title: '이스라엘-이란 휴전 7월 내로 된다.',
    selectedOption: 'YES',
    amount: 100000,
    toWin: 150000,
    odds: 1.5,
    bettingDate: '2025-07-03 00:00:00',
    status: 'PENDING',
  },
  {
    id: 5,
    title: '이스라엘-이란 휴전 7월 내로 된다.',
    selectedOption: 'NO',
    amount: 100000,
    toWin: 150000,
    odds: 1.5,
    bettingDate: '2025-07-03 00:00:00',
    status: 'PENDING',
  },
];

// Mock wallet state
const mockWalletState = {
  isConnected: false, // false로 변경하면 지갑 미연결 상태
};

export default function LogPage() {
  const [walletState, setWalletState] = useState(mockWalletState);
  const [bettingHistory, setBettingHistory] = useState<
    {
      id: number;
      title: string;
      selectedOption: string;
      amount: number;
      toWin: number;
      odds: number;
      bettingDate: string;
      status: string;
    }[]
  >([]);

  const handleConnect = () => {
    setWalletState({ isConnected: true });
  };

  const shareEvent = async (betTitle: string) => {
    const shareData = {
      title: `VIP PolyB ${betTitle} Betting NOW!`,
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

  useEffect(() => {
    if (walletState.isConnected) {
      setBettingHistory(mockBettingHistory);
    }
  }, [walletState.isConnected]);

  return (
    <div className="flex-1 relative overflow-y-auto">
      <div className="relative z-10 p-4 md:p-8 pt-20 md:pt-8 min-h-full">
        <HeaderCard title="Log" />
        {!walletState.isConnected ? (
          <WalletConnect
            title="To check your betting history"
            handleConnect={handleConnect}
          />
        ) : (
          // Betting history
          <div className="space-y-4 md:space-y-6 max-w-4xl">
            {bettingHistory.map((bet) => (
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
                      <div className="text-cyan-400 font-bold text-lg">
                        WIN!!
                      </div>
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
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
