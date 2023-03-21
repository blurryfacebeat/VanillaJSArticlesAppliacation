import onChange from 'on-change';

import { BaseView } from '@/core/view/view';
import { IMainViewState } from '@/views/main/main.types';

export class MainView extends BaseView {
  appState: Record<string, any> = {};
  state: IMainViewState = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };

  constructor(appState: Record<string, any>) {
    super();

    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle('Articles Search');
  }

  appStateHook(path: string): void {
    if (path === 'favorites') this.render();
  }

  destroy(): void {}

  render(): void {
    const main = document.createElement('div');

    main.innerHTML = `Number of articles: ${this.appState.favorites.length}`;

    this.app.innerHTML = '';
    this.app.append(main);
  }
}
