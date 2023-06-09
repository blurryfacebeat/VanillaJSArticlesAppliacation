import './components/card/card.js';
import { BaseView } from '@/core/view/view';
import { MainView } from '@/views/main/main';
import { IApp, IRoute } from '@/index.types';

const testFunc = async () => {
  const resp = await fetch('https://api.spaceflightnewsapi.net/v3/articles');

  console.log(321, resp);
};
class App implements IApp {
  currentView: BaseView | null = null;
  routes: Array<IRoute> = [{ path: '', view: MainView }];
  appState: Record<string, any> = {
    favorites: [],
  };

  constructor() {
    window.addEventListener('hashchange', this.route.bind(this));

    this.route();
  }

  route(): void {
    if (this.currentView) this.currentView.destroy();

    const view = this.routes.find(
      (route) => route.path === location.hash,
    )!.view;

    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();

await testFunc();
