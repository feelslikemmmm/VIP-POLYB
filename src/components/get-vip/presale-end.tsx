import { Button } from '../ui/button';

interface PresaleEndProps {
  handleFreeGetVip: () => void;
}

export default function PresaleEnd({ handleFreeGetVip }: PresaleEndProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
          $VIP FREE SALE END
        </h2>
      </div>
      <div className="w-full max-w-md">
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
