import Lottie from 'lottie-react';
import loadingAnimation from '../../../public/Loadinteractive.json';

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
    <div className="fixed inset-y-0 left-0 md:left-64 right-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-50 h-auto md:w-72 md:h-auto"
        style={{
          backgroundColor: 'transparent',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
