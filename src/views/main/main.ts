import { BaseView } from '@/core/view/view';

export class MainView extends BaseView {
  constructor() {
    super();
    this.setTitle('Articles Search');
  }

  destroy(): void {}

  render(): void {
    const main = document.createElement('div');

    main.innerHTML = 'Test';

    this.app.innerHTML = '';
    this.app.append(main);
  }
}
