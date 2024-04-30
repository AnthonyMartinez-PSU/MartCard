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

  updated(changedProperties) {
    if (changedProperties.has('counter')) {
      if (this.counter === 21) {
        this.makeItRain();
      }
      this.disableIncrement = this.counter >= this.max;
      this.disableDecrement = this.counter <= this.min;
    }
  }

  static get styles() {
    return css`
      ::host {
  display: inline-block;
  font-family: sans-serif;
  text-align: center;
}

.counter {
  font-size: 48px;
  color: black;
  margin-bottom: 16px;
  transition: color 0.3s ease;
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

.buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

button {
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
  border: 2px solid blue;
  border-radius: 4px;
  background-color: lightblue;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover,
button:focus {
  background-color: grey;
  color: black;
}

button:disabled {
  background-color: #ced4da;
  cursor: not-allowed;
}
    `;
  }

  render() {
    return html`
      <confetti-container id="confetti">
        <div class="counter ${this.counter === 18 ? 'orange' : ''} ${this.counter === 21 ? 'blue' : ''} ${this.counter === this.min || this.counter === this.max ? 'grey' : ''}">
          ${this.counter}
        </div>
      </confetti-container>
      <div class="buttons">
        <button @click=${() => this.decrement()} ?disabled=${this.disableDecrement}>-</button>
        <button @click=${() => this.increment()} ?disabled=${this.disableIncrement}>+</button>
      </div>
    `;
  }

  increment() {
    if (!this.hasLimits || (this.counter < this.max)) {
      this.counter++;
    }
  }

  decrement() {
    if (!this.hasLimits || (this.counter > this.min)) {
      this.counter--;
    }
  }

  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }
}

customElements.define('counter-app', CounterApp);
