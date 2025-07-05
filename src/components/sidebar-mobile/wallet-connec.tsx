import { Wallet } from 'lucide-react';
import React from 'react';

interface WalletConnectProps {
  handleWalletConnect: () => void;
}

export default function WalletConnect({
  handleWalletConnect,
}: WalletConnectProps) {
  return (
    <button
      onClick={handleWalletConnect}
      className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors w-full text-left"
    >
      <Wallet className="w-5 h-5" />
      <span>KAIA WALLET LOGIN</span>
    </button>
  );
}
