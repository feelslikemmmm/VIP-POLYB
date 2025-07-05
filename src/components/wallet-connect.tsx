import React from 'react';
import { Button } from '@/components/ui/button';

interface WalletConnectProps {
  title: string;
  handleConnect: () => void;
}

export default function WalletConnect({
  title,
  handleConnect,
}: WalletConnectProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400">
          {title}
        </h2>
        <p className="text-lg text-gray-300">
          you need to log in with your KAIA Wallet.
        </p>
      </div>
      <Button
        onClick={handleConnect}
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg"
      >
        Connect
      </Button>
    </div>
  );
}
