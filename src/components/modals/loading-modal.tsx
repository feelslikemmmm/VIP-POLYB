import Image from 'next/image';

interface LoadingModalProps {
  isOpen: boolean;
}

/**
 * 로딩 모달 컴포넌트
 * @param isOpen - 모달 열림 상태
 * @returns JSX.Element
 * @description 데이터 로딩 중일 때 표시되는 로딩 애니메이션 모달
 */
export default function LoadingModal({ isOpen }: LoadingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 left-0 md:left-64 right-0 z-50 flex items-center justify-center">
      <Image
        src="/loading.gif"
        alt="로딩 중..."
        width={300}
        height={300}
        className="w-50 h-auto md:w-72 md:h-auto"
        unoptimized
      />
    </div>
  );
}
