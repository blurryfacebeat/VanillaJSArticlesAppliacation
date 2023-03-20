export interface IViewTypes {
  app: HTMLElement;

  setTitle: (title: string) => void;
  render: () => void;
  destroy: () => void;
}
