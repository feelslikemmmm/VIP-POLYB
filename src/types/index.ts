/**
 * 베팅 옵션 인터페이스
 * @description 각 베팅 이벤트의 선택 가능한 옵션을 정의
 */
export interface BettingOption {
  id: number;
  name: string;
  amount: number;
  odds: number;
}

/**
 * 베팅 이벤트 인터페이스
 * @description 전체 베팅 이벤트의 정보를 정의
 */
export interface BettingEvent {
  id: number;
  title: string;
  bettingEndDate: string;
  bettingAmount: number;
  totalParticipants: number;
  options: BettingOption[];
}

/**
 * 하위 호환성을 위한 타입 별칭
 * @description BettingEvent와 동일한 타입으로 사용
 */
export type BettingList = BettingEvent;
