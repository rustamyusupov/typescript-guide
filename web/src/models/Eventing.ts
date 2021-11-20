type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (name: string, cb: Callback): void => {
    const handlers = this.events[name] ?? [];

    handlers.push(cb);
    this.events[name] = handlers;
  };

  trigger = (name: string): void => {
    const handlers = this.events[name] || [];

    handlers.forEach((cb) => cb());
  };
}
