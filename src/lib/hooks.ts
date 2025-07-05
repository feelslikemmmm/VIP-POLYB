import { useState, useEffect } from 'react';
import { BettingList, BettingOption } from '@/types';
import { fetchBettingList } from '@/api';
import { BETTING_LIST } from '@/lib/betting-data';

/**
 * 베팅 리스트를 가져오는 커스텀 훅
 */
export const useBettingList = () => {
  const [bettingList, setBettingList] = useState<BettingList[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //백엔드 api 통해서 실제로 가져올 데이터 (임시 데이터로 바인딩)
  useEffect(() => {
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

  const selectBettingOption = (option: BettingOption) => {
    setSelectedOption(option);
    setSelectedOptionId(option.id);
    setBetAmount('');
  };

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
