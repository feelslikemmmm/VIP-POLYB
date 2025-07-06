# VIP PolyB - 정치 예측 베팅 플랫폼

## 📋 프로젝트 개요

VIP PolyB는 정치 이벤트에 대한 예측 베팅을 제공하는 웹 애플리케이션입니다. 사용자는 다양한 정치적 사건의 결과에 베팅하고, VIP 토큰을 사용하여 거래할 수 있습니다.

## 🛠 기술 스택

- **프레임워크**: Next.js 14 (React 18)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: Radix UI
- **상태 관리**: React Hooks
- **빌드 도구**: Next.js 내장 빌드 시스템

## 📁 프로젝트 구조

```
src/
├── api/                    # API 관련 함수
│   └── index.ts           # 베팅 데이터 조회 API
├── app/                   # Next.js App Router 페이지
│   ├── event/[id]/        # 베팅 이벤트 상세 페이지
│   ├── get-vip/          # VIP 토큰 구매 페이지
│   ├── log/              # 베팅 기록 페이지
│   ├── reward/           # 보상 페이지
│   ├── layout.tsx        # 전체 레이아웃
│   ├── page.tsx          # 홈페이지
│   └── globals.css       # 전역 스타일
├── components/           # 재사용 가능한 컴포넌트
│   ├── event/           # 베팅 이벤트 관련 컴포넌트
│   ├── get-vip/         # VIP 구매 관련 컴포넌트
│   ├── home/            # 홈페이지 컴포넌트
│   ├── modals/          # 모달 컴포넌트
│   ├── reward/          # 보상 관련 컴포넌트
│   ├── sidebar/         # 사이드바 컴포넌트
│   ├── sidebar-mobile/  # 모바일 사이드바 컴포넌트
│   └── ui/              # 기본 UI 컴포넌트
├── lib/                 # 유틸리티 및 헬퍼 함수
│   ├── betting-data.ts  # 베팅 데이터 및 계산 함수
│   ├── hooks.ts         # 커스텀 React 훅
│   └── utils.ts         # 공통 유틸리티 함수
└── types/               # TypeScript 타입 정의
    └── index.ts         # 베팅 관련 타입 정의
```

## 🎯 주요 기능

### 1. 베팅 시스템

- **베팅 리스트**: 다양한 정치 이벤트 베팅 옵션 제공
- **베팅 상세**: 개별 이벤트의 상세 정보 및 베팅 기능
- **배당률 계산**: 실시간 배당률 계산 (수수료 8% 적용)
- **베팅 폼**: 베팅 금액 입력 및 예상 수익 계산

### 2. 지갑 연동

- **KAIA 지갑 연결**: 블록체인 지갑 연동 기능
- **VIP 토큰 관리**: VIP 토큰 잔액 확인 및 거래
- **거래 모달**: 베팅 거래 처리 인터페이스

### 3. 사용자 기록 관리

- **베팅 로그**: 사용자의 베팅 기록 조회
- **보상 시스템**: 승리한 베팅의 보상 수령 기능
- **공유 기능**: 베팅 결과 소셜 미디어 공유

### 4. VIP 토큰 시스템

- **프리세일**: VIP 토큰 사전 판매 기능
- **다중 결제**: USDT, KAIA 토큰으로 VIP 구매
- **무료 획득**: 게임을 통한 VIP 토큰 무료 획득

## 🏗 컴포넌트 아키텍처

### 📱 페이지 컴포넌트

- `app/page.tsx`: 메인 홈페이지 (베팅 리스트 표시)
- `app/event/[id]/page.tsx`: 베팅 이벤트 상세 페이지
- `app/get-vip/page.tsx`: VIP 토큰 구매 페이지
- `app/log/page.tsx`: 베팅 기록 페이지
- `app/reward/page.tsx`: 보상 수령 페이지

### 🧩 핵심 컴포넌트

#### 홈페이지 (`components/home/`)

- `betting-card.tsx`: 베팅 이벤트 카드 컴포넌트
- `header-card.tsx`: 홈페이지 헤더
- `home-header.tsx`: 배경 애니메이션

#### 베팅 시스템 (`components/event/`)

- `betting-detail-card.tsx`: 베팅 상세 정보 카드
- `betting-form.tsx`: 베팅 금액 입력 폼

#### 사이드바 (`components/sidebar/`)

- `sidebar.tsx`: 메인 사이드바 컨테이너
- `logo.tsx`: 브랜드 로고
- `main-nav.tsx`: 주요 네비게이션 메뉴
- `navigation-item.tsx`: 개별 네비게이션 아이템
- `wallet-connect.tsx`: 지갑 연결 버튼
- `wallet-infomation.tsx`: 연결된 지갑 정보 표시

#### 모달 시스템 (`components/modals/`)

- `trade-modal.tsx`: 베팅 거래 처리 모달
- `insufficient-balance-modal.tsx`: 잔액 부족 알림 모달

## 📊 데이터 관리

### 상태 관리 (`lib/hooks.ts`)

- `useBettingList()`: 베팅 리스트 데이터 관리
- `useBettingDetail()`: 베팅 상세 상태 관리

### 데이터 구조 (`lib/betting-data.ts`)

- 베팅 이벤트 목 데이터
- 배당률 계산 로직
- 플랫폼 수수료 적용 (8%)

### 유틸리티 함수 (`lib/utils.ts`)

- 숫자 포맷팅 (천단위 콤마)
- 베팅 금액 유효성 검증
- 예상 수익 계산
- UI 스타일링 헬퍼

## 🔧 개발 환경 설정

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn 패키지 매니저

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

### 환경 변수

현재 환경 변수는 사용하지 않지만, 향후 API 연동 시 다음과 같은 변수들이 필요할 수 있습니다:

- `NEXT_PUBLIC_API_URL`: 백엔드 API URL
- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`: 지갑 연결 프로젝트 ID

## 📈 향후 개발 계획

### 백엔드 연동

- 현재 목 데이터를 실제 API로 교체
- 사용자 인증 시스템 구현
- 실시간 베팅 데이터 동기화

### 블록체인 연동

- 실제 KAIA 지갑 연동
- 스마트 컨트랙트를 통한 베팅 처리
- VIP 토큰 실제 거래 기능

## 📝 코드 품질

### 코딩 컨벤션

- **TypeScript**: 모든 컴포넌트와 함수에 타입 정의
- **JSDoc**: 모든 함수에 상세한 주석 작성
- **컴포넌트 분리**: 단일 책임 원칙에 따른 컴포넌트 설계
- **재사용성**: 공통 로직의 훅 및 유틸리티 함수 분리

### 파일 명명 규칙

- **컴포넌트**: PascalCase (예: `BettingCard.tsx`)
- **훅**: camelCase with "use" prefix (예: `useBettingList`)
- **유틸리티**: camelCase (예: `calculateOdds`)
- **타입**: PascalCase (예: `BettingEvent`)
