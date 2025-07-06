import NavigationItem from '@/components/sidebar/navigation-item';

interface MainNavProps {
  isActiveRoute: (route: string) => boolean;
}

/**
 * 사이드바 메인 네비게이션 컴포넌트
 * @param isActiveRoute - 현재 경로가 활성 상태인지 확인하는 함수
 * @returns JSX.Element
 * @description 사이드바의 주요 네비게이션 메뉴들을 렌더링하는 컴포넌트
 */
export default function MainNav({ isActiveRoute }: MainNavProps) {
  return (
    <nav className="flex-1 p-4 overflow-y-auto">
      <div className="space-y-2">
        <NavigationItem
          href="/"
          iconUrl="/sidebar_01.png"
          label="Poly Betting"
          isActive={isActiveRoute('/poly-betting')}
        />
        <NavigationItem
          href="/log"
          iconUrl="/sidebar_02.png"
          label="Log"
          isActive={isActiveRoute('/log')}
        />
        <NavigationItem
          href="/reward"
          iconUrl="/sidebar_03.png"
          label="Reward"
          isActive={isActiveRoute('/reward')}
        />
        <NavigationItem
          href="/get-vip"
          iconUrl="/sidebar_04.png"
          label="Get $VIP"
          isActive={isActiveRoute('/get-vip')}
        />
      </div>
    </nav>
  );
}
