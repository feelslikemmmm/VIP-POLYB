'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOption: {
    name: string;
    amount: number;
  } | null;
  betAmount: string;
}

// Mock wallet state - 실제로는 지갑 연결 상태를 관리하는 context나 store에서 가져올 데이터
const mockWalletState = {
  isConnected: false, // true로 변경하면 연결된 상태
  address: '0x0000000000',
  vipBalance: 0, // 1000000으로 변경하면 VIP 보유 상태
};

export function TradeModal({
  isOpen,
  onClose,
  selectedOption,
  betAmount,
}: TradeModalProps) {
  const [walletState, setWalletState] = useState(mockWalletState);

  const handleConnect = () => {
    // 지갑 연결 로직
    setWalletState({
      ...walletState,
      isConnected: true,
      vipBalance: 3000000, // 연결 후 VIP 잔액 설정
    });
  };

  const handleGetVIP = () => {
    // Get $VIP 페이지로 이동하거나 VIP 구매 로직
    console.log('Get $VIP clicked');
    onClose();
  };

  const handleTrade = () => {
    // 실제 거래 로직
    console.log('Trade executed');
    onClose();
  };

  if (!selectedOption) return null;

  // 지갑이 연결되지 않은 경우
  if (!walletState.isConnected) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              KAIA WALLET LOGIN
            </DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <Button
              onClick={handleConnect}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 text-lg cursor-pointer"
            >
              Connect
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // 지갑은 연결되어 있지만 VIP가 부족한 경우
  if (walletState.vipBalance < selectedOption.amount) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md cursor-default">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              You dont have enough $VIP.
            </DialogTitle>
          </DialogHeader>
          <div className="py-6 text-center space-y-4">
            <div className="space-y-2">
              <p className="text-gray-300">
                Would you like to acquire more $VIP?
              </p>
            </div>
            <Button
              onClick={handleGetVIP}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 text-lg cursor-pointer"
            >
              Get $VIP
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // 지갑이 연결되어 있고 VIP가 충분한 경우
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold">TRADE</DialogTitle>
        </DialogHeader>
        <div className="py-6 space-y-6">
          {/* 지갑 정보 */}
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <div className="text-cyan-400 font-mono text-sm break-all">
              {walletState.address}
            </div>
            <div className="mt-2">
              <span className="text-gray-300">$VIP </span>
              <span className="text-red-400 font-bold">
                {walletState.vipBalance.toLocaleString()}
              </span>
            </div>
          </div>

          {/* 거래 정보 */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">Amount</span>
              <span className="text-red-400 font-bold">
                {Number(betAmount).toLocaleString()} VIP
              </span>
            </div>
          </div>

          {/* 거래 버튼 */}
          <Button
            onClick={handleTrade}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 text-lg cursor-pointer"
          >
            Trade
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
