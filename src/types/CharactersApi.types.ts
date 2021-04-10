export interface CharactersQueryParams {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: string;
  comics?: number;
  series?: number;
  events?: number;
  stories?: number;
  orderBy?: string;
  limit?: number;
  offset?: number;
}
