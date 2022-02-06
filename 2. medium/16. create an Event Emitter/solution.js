class EventEmitter {
  events = new Map();

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) this.events.set(eventName, new Set());

    const subscriptions = this.events.get(eventName);
    const subscription = { callback };

    subscriptions.add(subscription);
    return {
      release: () => {
        subscriptions.delete(subscription);
        if (subscriptions.size == 0) this.events.delete(eventName);
      },
    };
  }

  emit(eventName, ...args) {
    if (!this.events.has(eventName)) return;
    this.events.get(eventName).forEach((s) => s.callback.apply(this, args));
  }
}
