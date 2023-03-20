import { IViewTypes } from './view.types';

export abstract class BaseView implements IViewTypes {
  abstract render();
  abstract destroy();
}
