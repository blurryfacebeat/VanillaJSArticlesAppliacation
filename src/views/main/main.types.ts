export interface IMainViewState {
  list: Array<any>;
  loading: boolean;
  searchQuery: string | undefined;
  offset: number;
}
