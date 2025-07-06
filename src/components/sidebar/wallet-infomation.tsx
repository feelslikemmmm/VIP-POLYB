import { LogOut } from 'lucide-react';
import { Button } from '../ui/button';

/**
 * 목 지갑 데이터
 * @description 실제 서비스에서는 지갑 API에서 가져올 데이터
 */
const mockWalletData = {
  address: '0x1234...5678',
  fullAddress: '0x1234567890abcdef1234567890abcdef12345678',
  coins: [{ symbol: 'KAIA', amount: '1,234.56', value: '$2,469.12' }],
};

interface WalletInfomationProps {
  handleWalletDisconnect: () => void;
}

/**
 * 지갑 정보 표시 컴포넌트
 * @param handleWalletDisconnect - 지갑 연결 해제 처리 함수
 * @returns JSX.Element
 * @description 연결된 지갑의 주소, 보유 코인 정보, 연결 해제 버튼을 표시하는 컴포넌트
 */
export default function WalletInfomation({
  handleWalletDisconnect,
}: WalletInfomationProps) {
  return (
    <div className="space-y-3">
      {/* Wallet Address */}
      <div className="bg-gray-700 rounded-lg p-3">
        <div className="text-xs text-gray-400 mb-1">Wallet Address</div>
        <div className="text-white font-mono text-sm break-all leading-relaxed">
          {mockWalletData.fullAddress}
        </div>
      </div>

      {/* Coin List */}
      <div className="bg-gray-700 rounded-lg p-3">
        <div className="text-xs text-gray-400 mb-2">Holdings</div>
        <div className="space-y-2">
          {mockWalletData.coins.map((coin) => (
            <div key={coin.symbol}>
              <div className="flex justify-between items-center">
                <div className="text-white text-sm font-medium">
                  {coin.symbol}
                </div>
                <div className="text-white text-sm">{coin.amount}</div>
              </div>
              <div className="text-green-400 text-xs mt-1">{coin.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Disconnect Button */}
      <Button
        onClick={handleWalletDisconnect}
        variant="outline"
        className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent cursor-pointer"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Disconnect
      </Button>
    </div>
  );
}
