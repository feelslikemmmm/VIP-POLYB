import { Wallet } from 'lucide-react';

interface WalletConnectProps {
  handleWalletConnect: () => void;
}

/**
 * 지갑 연결 버튼 컴포넌트
 * @param handleWalletConnect - 지갑 연결 처리 함수
 * @returns JSX.Element
 * @description 사이드바에서 지갑 연결을 위한 버튼을 렌더링하는 컴포넌트
 */
export default function WalletConnect({
  handleWalletConnect,
}: WalletConnectProps) {
  return (
    <button
      onClick={handleWalletConnect}
      className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors w-full text-left cursor-pointer"
    >
      <Wallet className="w-5 h-5" />
      <span>KAIA WALLET LOGIN</span>
    </button>
  );
}
