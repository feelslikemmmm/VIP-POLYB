import Image from 'next/image';

/**
 * 사이드바 로고 컴포넌트
 * @returns JSX.Element
 * @description 사이드바 상단에 표시되는 VIP PolyB 로고와 제목
 */
export default function Logo() {
  return (
    <div className="p-6 border-b border-gray-700 flex-shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
        </div>
        <span className="text-xl font-bold text-white">VIP PolyB</span>
      </div>
    </div>
  );
}
