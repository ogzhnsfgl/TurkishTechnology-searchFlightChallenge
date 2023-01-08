export interface IFlightItemAirportCity {
  code: string;
  name: string;
}

export interface IFlightItemAirportCountry {
  code: string;
  name: string;
}

export interface IFlightItemAirport {
  name: string;
  code: string;
  city: IFlightItemAirportCity;
  country: IFlightItemAirportCountry;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface Subcategory {
  brandCode: string;
  price: Price;
  order: number;
  status: string;
  rights: string[];
}

export interface IFlightItemFareCategoriesSubItemPrice {
  amount: number;
  currency: string;
}

export interface IFlightItemFareCategoriesSubItem {
  brandCode: string;
  price: IFlightItemFareCategoriesSubItemPrice;
  order: number;
  status: string;
  rights: string[];
}

export interface IFlightItemFareCategoriesItem {
  subcategories: IFlightItemFareCategoriesSubItem[];
}

export interface IFlightItemFareCategories {
  BUSINESS: IFlightItemFareCategoriesItem;
  ECONOMY: IFlightItemFareCategoriesItem;
}

export interface IFlightItem {
  originAirport: IFlightItemAirport;
  destinationAirport: IFlightItemAirport;
  arrivalDateTimeDisplay: string;
  departureDateTimeDisplay: string;
  flightDuration: string;
  fareCategories: IFlightItemFareCategories;
}

export interface IFlightsData {
  flights: IFlightItem[];
}
