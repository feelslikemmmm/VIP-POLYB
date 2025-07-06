import { useState, useEffect } from 'react';
import { BettingList, BettingOption } from '@/types';
import { fetchBettingList } from '@/api';
import { BETTING_LIST } from '@/lib/betting-data';

/**
 * 베팅 리스트를 가져오는 커스텀 훅
 * @returns {Object} - bettingList: 베팅 리스트, isLoading: 로딩 상태, error: 에러 메시지
 * @description 홈페이지에서 전체 베팅 리스트를 불러오고 로딩/에러 상태를 관리
 */
export const useBettingList = () => {
  const [bettingList, setBettingList] = useState<BettingList[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //백엔드 api 통해서 실제로 가져올 데이터 (임시 데이터로 바인딩)
  useEffect(() => {
    /**
     * 베팅 리스트를 비동기로 로드하는 내부 함수
     * @description 백엔드 API를 통해 실제로 가져올 데이터 (현재는 임시 데이터로 바인딩)
     */
    const loadBettingList = async () => {
      try {
        setIsLoading(true);
        const data = await fetchBettingList();
        setBettingList(data);
      } catch (err) {
        console.error('베팅 리스트 로드 실패:', err);
        setError('베팅 리스트를 불러오는데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    loadBettingList();
  }, []);

  return { bettingList, isLoading, error };
};

/**
 * 베팅 디테일 상태를 관리하는 커스텀 훅
 * @param eventId - 베팅 이벤트 ID
 * @returns {Object} - 베팅 이벤트 정보, 선택된 옵션, 베팅 금액 및 관련 함수들
 * @description 특정 베팅 이벤트의 상세 정보와 사용자 선택 상태를 관리
 */
export const useBettingDetail = (eventId: number) => {
  const [selectedOptionId, setSelectedOptionId] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<BettingOption | null>(
    null
  );
  const [betAmount, setBetAmount] = useState('');

  const bettingEvent = BETTING_LIST.find((item) => item.id === eventId);

  useEffect(() => {
    if (bettingEvent && bettingEvent.options.length > 0) {
      const firstOption = bettingEvent.options[0];
      setSelectedOption(firstOption);
      setSelectedOptionId(firstOption.id);
    }
  }, [bettingEvent]);

  /**
   * 베팅 옵션을 선택하는 함수
   * @param option - 선택할 베팅 옵션
   * @description 사용자가 베팅 옵션을 선택할 때 상태를 업데이트하고 베팅 금액을 초기화
   */
  const selectBettingOption = (option: BettingOption) => {
    setSelectedOption(option);
    setSelectedOptionId(option.id);
    setBetAmount('');
  };

  /**
   * 베팅 금액을 업데이트하는 함수
   * @param value - 입력된 베팅 금액
   * @description 사용자가 입력한 베팅 금액을 상태에 저장
   */
  const updateBetAmount = (value: string) => {
    setBetAmount(value);
  };

  return {
    bettingEvent,
    selectedOptionId,
    selectedOption,
    betAmount,
    selectBettingOption,
    updateBetAmount,
  };
};
