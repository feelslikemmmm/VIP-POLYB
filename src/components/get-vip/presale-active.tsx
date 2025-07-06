import { Button } from '@/components/ui/button';

interface PresaleActiveProps {
  presaleData: {
    totalRounds: number;
    currentRound: number;
    roundTarget: number;
    roundRaised: number;
    vipPerUsdt: number;
    vipPerKaia: number;
    isActive: boolean;
    freeGetVipUrl: string;
  };
  vipAmount: number;
  setVipAmount: (amount: number) => void;
  maxVipAvailable: number;
  progressPercentage: number;
  handleTrade: (type: 'USDT' | 'KAIA') => void;
  handleFreeGetVip: () => void;
}

export default function PresaleActive({
  presaleData,
  vipAmount,
  setVipAmount,
  maxVipAvailable,
  progressPercentage,
  handleTrade,
  handleFreeGetVip,
}: PresaleActiveProps) {
  return (
    // Active presale state
    <div className="max-w-2xl mx-auto min-h-[80vh] flex flex-col">
      <div className="space-y-6 flex-1">
        {/* Round Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-cyan-400">
            {presaleData.currentRound} ROUND
          </h2>
          <p className="text-white text-lg">1 $VIP per 0.001 USDT</p>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-cyan-400 to-green-400 h-4 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-300">
              <span>
                {presaleData.roundRaised.toLocaleString()} /{' '}
                {presaleData.roundTarget.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <div className="text-gray-300">Amount</div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={vipAmount ? vipAmount.toLocaleString() : ''}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/,/g, '');
                const value = Math.min(Number(numericValue), maxVipAvailable);
                setVipAmount(Math.max(0, value));
              }}
              max={maxVipAvailable}
              min={0}
              placeholder="Enter VIP amount"
              className="flex-1 bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white text-xl font-bold text-center"
            />
            <span className="text-red-400 font-bold text-xl">VIP</span>
          </div>
          <div className="text-sm text-gray-400 text-center">
            Max: {maxVipAvailable.toLocaleString()} VIP available
          </div>
        </div>

        {/* Purchase Options */}
        {vipAmount > 0 && (
          <div className="space-y-3">
            <div className="bg-gray-800/80 border border-cyan-400 rounded-lg p-4 flex items-center justify-between">
              <span className="text-white font-medium">
                {Math.ceil(vipAmount / presaleData.vipPerUsdt).toLocaleString()}{' '}
                $USDT
              </span>
              <Button
                onClick={() => handleTrade('USDT')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
              >
                Trade
              </Button>
            </div>

            <div className="bg-gray-800/80 border border-cyan-400 rounded-lg p-4 flex items-center justify-between">
              <span className="text-white font-medium">
                {Math.ceil(vipAmount / presaleData.vipPerKaia).toLocaleString()}{' '}
                $KAIA
              </span>
              <Button
                onClick={() => handleTrade('KAIA')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
              >
                Trade
              </Button>
            </div>
          </div>
        )}

        {/* Next Round Info */}
        <div className="text-center">
          <p className="text-cyan-400 text-sm">
            Next Round 1$ VIP per 0.002 USDT
          </p>
        </div>
      </div>

      {/* Free Get VIP - Fixed at bottom */}
      <div className="mt-auto pt-8 pb-4">
        <div className="bg-gray-800/80 border border-cyan-400 rounded-lg p-4 flex items-center justify-between">
          <span className="text-white font-medium">FREE GET $VIP</span>
          <Button
            onClick={handleFreeGetVip}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2"
          >
            PLAY NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
