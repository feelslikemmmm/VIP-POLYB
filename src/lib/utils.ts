import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind CSS 클래스를 병합하는 유틸리티 함수
 * @param inputs - 병합할 클래스 값들
 * @returns 병합된 클래스 문자열
 * @description clsx와 tailwind-merge를 조합하여 조건부 클래스와 중복 클래스를 효율적으로 처리
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 숫자를 천단위 콤마로 포맷팅하는 함수
 * @param number - 포맷팅할 숫자
 * @returns 천단위 콤마가 적용된 문자열
 * @description 숫자를 사용자가 읽기 쉽게 천단위 구분 기호로 포맷팅
 */
export const formatNumberWithCommas = (number: number): string => {
  return number.toLocaleString();
};

/**
 * 인덱스에 따른 버튼 스타일을 반환하는 함수
 * @param index - 버튼의 인덱스
 * @returns 해당 인덱스에 맞는 Tailwind CSS 클래스
 * @description 베팅 옵션 버튼들에 서로 다른 색상을 적용하기 위한 스타일 매핑
 */
export const getButtonStyleByIndex = (index: number): string => {
  const styles = [
    'bg-blue-500 hover:bg-blue-600',
    'bg-red-500 hover:bg-red-600',
    'bg-green-500 hover:bg-green-600',
  ];
  return styles[index] || 'bg-gray-500 hover:bg-gray-600';
};

/**
 * 베팅 금액이 유효한지 확인하는 함수
 * @param betAmount - 검증할 베팅 금액 문자열
 * @returns 유효성 검증 결과 (boolean)
 * @description 베팅 금액이 비어있지 않고 0보다 큰 값인지 확인
 */
export const isBetAmountValid = (betAmount: string): boolean => {
  return betAmount !== '' && parseFloat(betAmount) > 0;
};

/**
 * 예상 수익을 계산하는 함수
 * @param betAmount - 베팅 금액 문자열
 * @param odds - 배당률
 * @returns 예상 수익 (소수점 2자리까지)
 * @description 베팅 금액과 배당률을 곱하여 예상 수익을 계산
 */
export const calculatePotentialWin = (
  betAmount: string,
  odds: number
): string => {
  if (!betAmount || parseFloat(betAmount) <= 0) return '0.00';
  return (parseFloat(betAmount) * odds).toFixed(2);
};
