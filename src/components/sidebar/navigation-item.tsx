import Image from 'next/image';
import Link from 'next/link';

interface NavigationItemProps {
  href: string;
  iconUrl: string;
  label: string;
  isActive: boolean;
  isExternal?: boolean;
}

/**
 * 네비게이션 아이템 컴포넌트
 * @param href - 링크 URL
 * @param iconUrl - 아이콘 이미지 URL
 * @param label - 메뉴 라벨
 * @param isActive - 활성 상태 여부
 * @param isExternal - 외부 링크 여부 (기본값: false)
 * @returns JSX.Element
 * @description 사이드바의 각 네비게이션 메뉴 아이템을 렌더링하는 컴포넌트
 */
export default function NavigationItem({
  href,
  iconUrl,
  label,
  isActive,
  isExternal = false,
}: NavigationItemProps) {
  const className = `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
    isActive && !isExternal
      ? 'bg-blue-600 text-white'
      : 'text-gray-300 hover:text-white hover:bg-gray-700'
  }`;

  // 외부 링크인 경우 새 탭에서 열기
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <Image
          src={iconUrl}
          width={20}
          height={20}
          className="w-5 h-5"
          alt={label}
        />
        <span>{label}</span>
      </a>
    );
  }

  // 내부 링크인 경우 Next.js Link 사용
  return (
    <Link href={href} className={className}>
      <Image
        src={iconUrl}
        width={20}
        height={20}
        className="w-5 h-5"
        alt={label}
      />
      <span>{label}</span>
    </Link>
  );
}
