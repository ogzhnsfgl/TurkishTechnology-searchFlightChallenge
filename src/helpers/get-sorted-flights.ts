import { ListSortTypes } from '@/constants/list-sort-types';
import { IFlightItem } from '@/models/data';
import { getDateFromTimeString } from './date-sort';

export const getSortedFlights = (
  flights: IFlightItem[],
  selectedSortOption: ListSortTypes
) => {
  return flights.sort((a, b) => {
    switch (selectedSortOption) {
      case ListSortTypes.PriceDescending:
        return (
          b.fareCategories.ECONOMY.subcategories.find(
            (cat) => cat.brandCode.toLowerCase() === 'ecofly'
          )!.price.amount -
          a.fareCategories.ECONOMY.subcategories.find(
            (cat) => cat.brandCode.toLowerCase() === 'ecofly'
          )!.price.amount
        );
      case ListSortTypes.DepartureTimeAscending:
        return (
          getDateFromTimeString(a.departureDateTimeDisplay) -
          getDateFromTimeString(b.departureDateTimeDisplay)
        );
      case ListSortTypes.DepartureTimeDescending:
        return (
          getDateFromTimeString(b.departureDateTimeDisplay) -
          getDateFromTimeString(a.departureDateTimeDisplay)
        );
      default:
        return (
          a.fareCategories.ECONOMY.subcategories.find(
            (cat) => cat.brandCode.toLowerCase() === 'ecofly'
          )!.price.amount -
          b.fareCategories.ECONOMY.subcategories.find(
            (cat) => cat.brandCode.toLowerCase() === 'ecofly'
          )!.price.amount
        );
    }
  });
};
