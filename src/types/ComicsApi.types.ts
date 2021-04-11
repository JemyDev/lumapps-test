export enum ComicPriceType {
  PrintPrice = 'printPrice',
  DigitalPrice = 'digitalPrice',
}

export enum ComicDateType {
  PrintDate = 'printDate',
  DigitalDate = 'digitalDate',
}

export interface ComicPriceRaw {
  type: 'printPrice' | 'digitalPurchasePrice';
  price: number;
}

export interface ComicDateRaw {
  type: 'onsaleDate' | 'digitalPurchaseDate';
  date: string;
}

export interface ComicPrice {
  [ComicPriceType.PrintPrice]: string;
  [ComicPriceType.DigitalPrice]: string;
}

export interface ComicDate {
  [ComicDateType.PrintDate]: string;
  [ComicDateType.DigitalDate]: string;
}

export interface ComicSummary {
  resourceURI: string;
  name: string;
}

export interface ComicList {
  available: number;
  collectionURI: string;
  items: ComicSummary[];
}

export interface ComicResultRaw {
  title: string;
  prices: ComicPriceRaw[];
  dates: ComicDateRaw[];
}

export interface Comic {
  title: string;
  prices: ComicPrice[];
  dates: ComicDate[];
}
