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
  // 지갑 연결 상태 관리
  const [walletState, setWalletState] = useState(mockWalletState);

  // 프리세일 데이터 상태 관리
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

  // 잔액 부족 모달 상태 관리
  const [showInsufficientModal, setShowInsufficientModal] = useState(false);
  const [insufficientType, setInsufficientType] = useState<'USDT' | 'KAIA'>(
    'USDT'
  );

  // VIP 구매 수량 상태 관리
  const [vipAmount, setVipAmount] = useState(0);

  // 지갑 연결 처리 함수
  const handleConnect = () => {
    setWalletState({ ...walletState, isConnected: true });
  };

  // VIP 거래 처리 함수 (USDT 또는 KAIA로 구매)
  const handleTrade = (type: 'USDT' | 'KAIA') => {
    if (!presaleData) return;

    // 필요한 코인 수량 계산
    const requiredAmount =
      type === 'USDT'
        ? Math.ceil(vipAmount / presaleData.vipPerUsdt)
        : Math.ceil(vipAmount / presaleData.vipPerKaia);

    // 사용자 잔액 확인
    const userBalance =
      type === 'USDT' ? walletState.usdtBalance : walletState.kaiaBalance;

    // 잔액 부족 시 모달 표시, 충분하면 거래 완료
    if (userBalance < requiredAmount) {
      setInsufficientType(type);
      setShowInsufficientModal(true);
    } else {
      // 실제 거래 로직 반영해야합니다.
      alert(`구매가 완료되었습니다.`);
    }
  };

  // 무료 VIP 획득 처리 함수 (외부 링크로 이동)
  const handleFreeGetVip = () => {
    if (!presaleData) return;
    window.open(presaleData.freeGetVipUrl, '_blank');
  };

  // 프리세일 진행률 계산
  const progressPercentage = presaleData
    ? (presaleData.roundRaised / presaleData.roundTarget) * 100
    : 0;

  // 남은 VIP 수량 계산
  const remainingAmount = presaleData
    ? presaleData.roundTarget - presaleData.roundRaised
    : 0;
  const maxVipAvailable = remainingAmount;

  // 지갑 연결 시 프리세일 데이터 로드
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
