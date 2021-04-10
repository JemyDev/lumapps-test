export interface ApiResponse<T> {
  data: {
    results: T[];
  }
}
