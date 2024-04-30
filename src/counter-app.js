import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {
  static get properties() {
    return {
      counter: { type: Number },
      min: { type: Number },
      max: { type: Number },
      disableIncrement: { type: Boolean },
      disableDecrement: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.counter = 16;
    this.min = 10;
    this.max = 25;
    this.disableIncrement = false;
    this.disableDecrement = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-size: 24px;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .counter {
        font-size: 100px;
        color: black;
      }

      .counter.orange {
        color: orange;
      }

      .counter.blue {
        color: blue;
      }

      .counter.grey {
        color: lightgrey;
      }

      .counter-buttons {
        display: flex;
        align-items: flex-end;
        margin-top: 20px;
      }

      button {
        font-size: 24px;
        padding: 8px 16px;
        margin: 0 8px;
        cursor: pointer;
        border: 2px solid blue;
        border-radius: 10px;
        outline: none;
        background-color: lightblue;
}

button:hover {
  background-color: grey;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="counter ${this.counter === 18 ? 'orange' : ''} ${this.counter === 21 ? 'blue' : ''} ${this.counter === this.min || this.counter === this.max ? 'grey' : ''}">${this.counter}</div>
        <div class="counter-buttons">
          <button id="increment" class="btn" @click=${this.increment} ?disabled=${this.disableIncrement}>+</button>
          <button id="decrement" class="btn" @click=${this.decrement} ?disabled=${this.disableDecrement}>-</button>
        </div>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('counter')) {
      this.disableIncrement = this.counter >= this.max;
      this.disableDecrement = this.counter <= this.min;
    }
  }

  increment() {
    if (this.counter < this.max) {
      this.counter++;
    }
  }

  decrement() {
    if (this.counter > this.min) {
      this.counter--;
    }
  }
}

customElements.define('counter-app', CounterApp);
