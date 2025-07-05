import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

// Mock wallet data
const mockWalletData = {
  address: '0x1234...5678',
  fullAddress: '0x1234567890abcdef1234567890abcdef12345678',
  coins: [
    { symbol: 'KAIA', amount: '1,234.56', value: '$2,469.12' },
    { symbol: 'VIP', amount: '10,000', value: '$500.00' },
    { symbol: 'USDT', amount: '500.00', value: '$500.00' },
  ],
};

interface WalletInfomationProps {
  handleWalletDisconnect: () => void;
}

export default function WalletInfomation({
  handleWalletDisconnect,
}: WalletInfomationProps) {
  return (
    <div className="space-y-3">
      {/* Wallet Address */}
      <div className="bg-gray-700 rounded-lg p-3">
        <div className="text-xs text-gray-400 mb-1">Wallet Address</div>
        <div className="text-white font-mono text-sm break-all">
          {mockWalletData.address}
        </div>
      </div>

      {/* Coin List */}
      <div className="bg-gray-700 rounded-lg p-3">
        <div className="text-xs text-gray-400 mb-2">Holdings</div>
        <div className="space-y-2">
          {mockWalletData.coins.map((coin) => (
            <div
              key={coin.symbol}
              className="flex justify-between items-center"
            >
              <div>
                <div className="text-white text-sm font-medium">
                  {coin.symbol}
                </div>
                <div className="text-gray-400 text-xs">{coin.amount}</div>
              </div>
              <div className="text-green-400 text-xs">{coin.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Disconnect Button */}
      <Button
        onClick={handleWalletDisconnect}
        variant="outline"
        className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Disconnect
      </Button>
    </div>
  );
}
