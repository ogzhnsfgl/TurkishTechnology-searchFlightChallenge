import { CabinTypes } from '@/constants/cabin-types';

export interface ILSSearchState {
  originCity: string;
  destinationCity: string;
  cabinType: CabinTypes;
  personCount: number;
}

export interface ILSPromotionState {
  isActive: boolean;
}
