import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 숫자를 천단위 콤마로 포맷팅하는 함수
 */
export const formatNumberWithCommas = (number: number): string => {
  return number.toLocaleString();
};

/**
 * 인덱스에 따른 버튼 스타일을 반환하는 함수
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
 */
export const isBetAmountValid = (betAmount: string): boolean => {
  return betAmount !== '' && parseFloat(betAmount) > 0;
};

/**
 * 예상 수익을 계산하는 함수
 * @param betAmount 베팅 금액
 * @param odds 배당률
 * @returns 예상 수익 (소수점 2자리까지)
 */
export const calculatePotentialWin = (
  betAmount: string,
  odds: number
): string => {
  if (!betAmount || parseFloat(betAmount) <= 0) return '0.00';
  return (parseFloat(betAmount) * odds).toFixed(2);
};
