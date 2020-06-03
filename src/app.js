class Counter {
  #counter = 0;
  #counterLabel = null;

  constructor() {
    const counterButton = document.getElementById('counterButton');
    this.#counterLabel = document.getElementById('counterLabel');
    this.#counterLabel.textContent = `Counter: ${this.#counter}`;

    counterButton.addEventListener('click', () => {
      this.#incrementCounter();
      this.#counterLabel.textContent = `Counter: ${this.#counter}`;
    });
  }

  #incrementCounter() {
    this.#counter += 1;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const counter = new Counter();
  // console.log(counter.#counter);
});