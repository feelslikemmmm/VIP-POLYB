'use client';

import { useState } from 'react';
import HeaderCard from '@/components/header-card';
import WalletConnect from '@/components/wallet-connect';
import HistoryCard from '@/components/reward/history-card';

// Mock data - 실제로는 API에서 가져올 데이터 (배팅이 종료된 것들만)
const mockRewardHistory = [
  {
    id: 1,
    title: '이스라엘-이란 휴전 7월 내로 된다.',
    selectedOption: 'YES',
    amount: 100000,
    toWin: 150000,
    odds: 1.5,
    bettingDate: '2025-07-03 00:00:00',
    status: 'WIN', // WIN, LOSE만 있음 (PENDING 제외)
    claimed: false,
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
    claimed: false,
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
    claimed: true, // 이미 Claim한 상태
  },
  {
    id: 4,
    title: '한국 민주당 당대표 선거 예측',
    selectedOption: '정청래',
    amount: 50000,
    toWin: 105000,
    odds: 2.1,
    bettingDate: '2025-07-02 00:00:00',
    status: 'WIN',
    claimed: false,
  },
  {
    id: 5,
    title: '한국 민주당 당대표 선거 예측',
    selectedOption: '박찬대',
    amount: 75000,
    toWin: 210000,
    odds: 2.8,
    bettingDate: '2025-07-02 00:00:00',
    status: 'LOSE',
    claimed: false,
  },
];

// Mock wallet state
const mockWalletState = {
  isConnected: false, // false로 변경하면 지갑 미연결 상태
};

export default function RewardPage() {
  const [walletState, setWalletState] = useState(mockWalletState);
  const [rewardHistory, setRewardHistory] = useState(mockRewardHistory);

  const handleConnect = () => {
    setWalletState({ isConnected: true });
  };

  const handleClaim = (id: number) => {
    setRewardHistory((prev) =>
      prev.map((bet) => (bet.id === id ? { ...bet, claimed: true } : bet))
    );
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

  return (
    <div className="flex-1 relative overflow-y-auto">
      <div className="relative z-10 p-4 md:p-8 pt-20 md:pt-8 min-h-full">
        <HeaderCard title="Reward" />
        {!walletState.isConnected ? (
          <WalletConnect
            title=" To check your rewards"
            handleConnect={handleConnect}
          />
        ) : (
          // Reward history
          <div className="space-y-4 md:space-y-6 max-w-4xl">
            {rewardHistory.map((bet) => (
              <HistoryCard
                key={bet.id}
                bet={bet}
                shareEvent={shareEvent}
                handleClaim={handleClaim}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
