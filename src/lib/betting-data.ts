import { BettingList } from '@/types';

/**
 * 베팅 리스트 목 데이터
 * @description 실제 서비스에서는 백엔드 API에서 가져올 데이터
 * 현재는 개발 및 테스트 목적으로 하드코딩된 데이터 사용
 */
export const BETTING_LIST: BettingList[] = [
  {
    id: 1,
    title: '이스라엘 - 이란 휴전 7월 내로 된다.',
    bettingEndDate: '2025-07-02 23:59:59',
    bettingAmount: 1000000,
    totalParticipants: 15000,
    options: [
      { id: 1, name: 'YES', amount: 1500, odds: 1.8 },
      { id: 2, name: 'NO', amount: 2300, odds: 2.1 },
    ],
  },
  {
    id: 2,
    title: '한국 민주당 당대표 선거 예측',
    bettingEndDate: '2025-08-15 18:00:00',
    bettingAmount: 500000,
    totalParticipants: 8500,
    options: [
      { id: 3, name: '정청래', amount: 800, odds: 2.5 },
      { id: 4, name: '박찬대', amount: 1200, odds: 3.2 },
      { id: 5, name: '김민석', amount: 600, odds: 4.1 },
    ],
  },
  {
    id: 3,
    title: '삼성전자 주가 12월 말 8만원 돌파',
    bettingEndDate: '2024-12-31 15:30:00',
    bettingAmount: 2000000,
    totalParticipants: 25000,
    options: [
      { id: 6, name: '돌파', amount: 2100, odds: 1.6 },
      { id: 7, name: '미달', amount: 3400, odds: 1.4 },
    ],
  },
  {
    id: 4,
    title: 'SK하이닉스 주가 12월 말 15만원 돌파',
    bettingEndDate: '2024-12-31 15:30:00',
    bettingAmount: 1800000,
    totalParticipants: 22000,
    options: [
      { id: 8, name: '돌파', amount: 2100, odds: 1.6 },
      { id: 9, name: '미달', amount: 3400, odds: 1.4 },
    ],
  },
  {
    id: 5,
    title: 'LG에너지솔루션 주가 12월 말 50만원 돌파',
    bettingEndDate: '2024-12-31 15:30:00',
    bettingAmount: 2200000,
    totalParticipants: 28000,
    options: [
      { id: 10, name: '돌파', amount: 2100, odds: 1.6 },
      { id: 11, name: '미달', amount: 3400, odds: 1.4 },
      { id: 12, name: '보류', amount: 1500, odds: 2.1 },
    ],
  },
];

/**
 * 배당률 계산 함수
 * @param bettingList - 베팅 리스트 전체 정보
 * @param optionAmount - 특정 옵션의 배팅 금액
 * @returns 계산된 배당률 (소수점 둘째자리까지)
 * @description 공식: (전체 배팅금액 * 0.92) / 해당 옵션의 배팅 금액
 * 0.92는 플랫폼 수수료 8%를 제외한 비율
 */
export const calculateOdds = (
  bettingList: BettingList,
  optionAmount: number
): number => {
  // 해당 베팅 리스트의 모든 옵션 배팅 금액 합계 계산
  const totalOptionAmount = bettingList.options.reduce(
    (sum, option) => sum + option.amount,
    0
  );

  // 배당률 계산: (전체 배팅금액 * 0.92) / 해당 옵션의 배팅 금액
  const odds = (totalOptionAmount * 0.92) / optionAmount;

  // 소수점 둘째자리까지 반올림
  return Math.round(odds * 100) / 100;
};
