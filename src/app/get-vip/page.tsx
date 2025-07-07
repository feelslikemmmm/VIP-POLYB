'use client';

import { useEffect, useState } from 'react';
import HeaderCard from '@/components/header-card';
import WalletConnect from '@/components/wallet-connect';
import PresaleEnd from '@/components/get-vip/presale-end';
import PresaleActive from '@/components/get-vip/presale-active';
import InsufficientBalanceModal from '@/components/modals/insufficient-balance-modal';
import LoadingModal from '@/components/modals/loading-modal';

// Mock presale data
const mockPresaleData = {
  totalRounds: 20,
  currentRound: 1,
  roundTarget: 10000000, // 해당 라운드에 판매할 총 vip 수
  roundRaised: 7070707, // 현재까지 진행된 vip
  vipPerUsdt: 1000, // 1000 VIP per 0.001 USDT
  vipPerKaia: 45.45, // VIP per KAIA rate
  isActive: true, // false면 프리세일 종료
  freeGetVipUrl: 'https://vipgame.2tm.fun/', // 관리자 설정 URL
};

// Mock wallet state
const mockWalletState = {
  isConnected: false, // false로 변경하면 지갑 미연결 상태
  usdtBalance: 200, // USDT 잔액
  kaiaBalance: 15000, // KAIA 잔액
};

export default function GetVipPage() {
  const [walletState, setWalletState] = useState(mockWalletState);
  const [presaleData, setPresaleData] = useState<{
    totalRounds: number;
    currentRound: number;
    roundTarget: number;
    roundRaised: number;
    vipPerUsdt: number;
    vipPerKaia: number;
    isActive: boolean;
    freeGetVipUrl: string;
  }>();
  const [showInsufficientModal, setShowInsufficientModal] = useState(false);
  const [insufficientType, setInsufficientType] = useState<'USDT' | 'KAIA'>(
    'USDT'
  );
  const [vipAmount, setVipAmount] = useState(0);

  const handleConnect = () => {
    setWalletState({ ...walletState, isConnected: true });
  };

  const handleTrade = (type: 'USDT' | 'KAIA') => {
    if (!presaleData) return;

    const requiredAmount =
      type === 'USDT'
        ? Math.ceil(vipAmount / presaleData.vipPerUsdt)
        : Math.ceil(vipAmount / presaleData.vipPerKaia);
    const userBalance =
      type === 'USDT' ? walletState.usdtBalance : walletState.kaiaBalance;

    if (userBalance < requiredAmount) {
      setInsufficientType(type);
      setShowInsufficientModal(true);
    } else {
      // 실제 거래 로직 반영해야합니다.
      alert(`구매가 완료되었습니다.`);
    }
  };

  const handleFreeGetVip = () => {
    if (!presaleData) return;
    window.open(presaleData.freeGetVipUrl, '_blank');
  };

  const progressPercentage = presaleData
    ? (presaleData.roundRaised / presaleData.roundTarget) * 100
    : 0;
  const remainingAmount = presaleData
    ? presaleData.roundTarget - presaleData.roundRaised
    : 0;
  const maxVipAvailable = remainingAmount;

  useEffect(() => {
    if (walletState.isConnected) {
      setPresaleData(mockPresaleData);
    }
  }, [walletState.isConnected]);

  return (
    <div className="flex-1 relative overflow-y-auto">
      <div className="relative z-10 p-4 md:p-8 pt-20 md:pt-8 min-h-full">
        <HeaderCard title="$VIP FREE SALE" />
        {!walletState.isConnected ? (
          <WalletConnect title="To get $VIP" handleConnect={handleConnect} />
        ) : !presaleData ? (
          <>
            <LoadingModal isOpen={true} />
            <div className="text-center text-white opacity-0">
              데이터 로딩 중...
            </div>
          </>
        ) : !presaleData.isActive ? (
          <PresaleEnd handleFreeGetVip={handleFreeGetVip} />
        ) : (
          <PresaleActive
            presaleData={presaleData}
            vipAmount={vipAmount}
            setVipAmount={setVipAmount}
            maxVipAvailable={maxVipAvailable}
            progressPercentage={progressPercentage}
            handleTrade={handleTrade}
            handleFreeGetVip={handleFreeGetVip}
          />
        )}
      </div>

      {showInsufficientModal && (
        <InsufficientBalanceModal
          showInsufficientModal={showInsufficientModal}
          setShowInsufficientModal={setShowInsufficientModal}
          insufficientType={insufficientType}
        />
      )}
    </div>
  );
}
