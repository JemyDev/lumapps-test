import { ApiResponse } from 'types/Api.types';
import { get } from './index';
import {
  Comic,
  ComicPrice,
  ComicPriceRaw,
  ComicResultRaw,
  ComicPriceType,
  ComicDateRaw,
  ComicDate,
  ComicDateType,
} from 'types/ComicsApi.types';
import { formatPrice } from 'utils/formatPrice';
import { formatDate } from 'utils/formatDate';

type ComicsData = ApiResponse<ComicResultRaw>;

function parsePricesPerComic(prices: ComicPriceRaw[]): ComicPrice[] {
  return prices.map((priceData) => {
    let result = {} as ComicPrice;
    const isPrint = priceData.type === 'printPrice';
    const isDigital = priceData.type === 'digitalPurchasePrice';
    const formatedPrice = formatPrice(priceData.price);

    if (isPrint) {
      result = {
        ...result,
        [ComicPriceType.PrintPrice]: formatedPrice,
      }
    }

    if (isDigital) {
      result = {
        ...result,
        [ComicPriceType.DigitalPrice]: formatedPrice,
      }
    }

    return result;
  }).filter((obj) => Object.keys(obj).length !== 0);
}

function parseDatesPerComic(dates: ComicDateRaw[]): ComicDate[] {
  return dates.map((dateData) => {
    let result = {} as ComicDate;
    const isPrint = dateData.type === 'onsaleDate';
    const isDigital = dateData.type === 'digitalPurchaseDate';
    const formatedDate = formatDate(dateData.date);

    if (isPrint) {
      result = {
        ...result,
        [ComicDateType.PrintDate]: formatedDate,
      }
    }

    if (isDigital) {
      result = {
        ...result,
        [ComicDateType.DigitalDate]: formatedDate,
      }
    }

    return result;
  }).filter((obj) => Object.keys(obj).length !== 0);
}

export async function getComics(url: string, limit: number): Promise<Comic[]> {
  const { data: comicsData } = await get<ComicsData>(url, { limit });

  return comicsData.data.results.map((comic) => ({
    title: comic.title,
    prices: parsePricesPerComic(comic.prices),
    dates: parseDatesPerComic(comic.dates),
  }));
}
