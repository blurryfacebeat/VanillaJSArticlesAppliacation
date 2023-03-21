import { BaseView } from '@/core/view/view';

export interface IApp {
  currentView: BaseView | null;
  routes: Array<IRoute>;
  appState: Record<string, any>;

  route: () => void;
}

export interface IRoute {
  path: string;
  view: new (appState: Record<string, any>) => BaseView;
}
