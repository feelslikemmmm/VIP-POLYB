import { Star } from 'lucide-react';

export default function Logo() {
  return (
    <div className="p-6 border-b border-gray-700 flex-shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
          <Star className="w-5 h-5 text-gray-900" />
        </div>
        <span className="text-xl font-bold text-white">VIP POLYB</span>
      </div>
    </div>
  );
}
