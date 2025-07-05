export interface BettingOption {
  id: number;
  name: string;
  amount: number;
  odds: number;
}

export interface BettingEvent {
  id: number;
  title: string;
  bettingEndDate: string;
  bettingAmount: number;
  totalParticipants: number;
  options: BettingOption[];
}

// 하위 호환성을 위한 타입 별칭
export type BettingList = BettingEvent;
