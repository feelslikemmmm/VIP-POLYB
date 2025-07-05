import Image from 'next/image';
import React from 'react';

export default function Logo() {
  return (
    <div className="p-6 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
        </div>
        <span className="text-xl font-bold text-white">VIP PolyB</span>
      </div>
    </div>
  );
}
