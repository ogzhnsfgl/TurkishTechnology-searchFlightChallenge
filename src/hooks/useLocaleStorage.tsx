import { ILSPromotionState, ILSSearchState } from '@/models/local-storage';

export const useLocaleStorage = () => {
  const searchState = JSON.parse(
    localStorage.getItem('searchState') ?? '{}'
  ) as Partial<ILSSearchState>;

  const isPromotionActive = JSON.parse(
    localStorage.getItem('promotionState') ?? '{}'
  ) as Partial<ILSPromotionState>;

  const setPromotionState = (state: boolean) => {
    localStorage.setItem('promotionState', JSON.stringify({ isActive: state }));
  };

  return {
    searchState,
    setPromotionState,
    isPromotionActive: isPromotionActive.isActive ?? false
  };
};
