import { IFlightItem } from '@/models/data';

export const getAvailableFlights = (
  flights: IFlightItem[],
  originCityName: string,
  destinationCityName: string
) => {
  const filteredFlights = flights.filter(
    (flight) =>
      flight.originAirport.city.name.toLocaleLowerCase() ===
        originCityName.toLocaleLowerCase() &&
      flight.destinationAirport.city.name.toLocaleLowerCase() ===
        destinationCityName.toLocaleLowerCase()
  );

  return filteredFlights;
};
