import { BaseView } from '@/core/view/view';

export interface IApp {
  currentView: BaseView | null;
  routes: Array<IRoute>;

  route: () => void;
}

export interface IRoute {
  path: string;
  view: new () => BaseView;
}
