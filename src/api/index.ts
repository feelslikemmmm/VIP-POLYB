// 현재는 로컬 데이터, 나중에 실제 API 호출로 변경
import { BETTING_LIST } from '@/lib/betting-data';
import { BettingList } from '@/types';

// 전체 베팅 리스트 조회 (홈페이지용)
export const fetchBettingList = async (): Promise<BettingList[]> => {
  // 실제 API 호출 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 500));
  return BETTING_LIST;
};
