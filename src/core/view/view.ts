import { IViewTypes } from './view.types';

export abstract class BaseView implements IViewTypes {
  app: HTMLElement;

  constructor() {
    this.app = document.getElementById('root')!;
  }

  setTitle(title: string) {
    document.title = title;
  }
  abstract render(): void;
  abstract destroy(): void;
}
