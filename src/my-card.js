import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      description: { type: String },
      image: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.title = "Activity 2: Penn State Basketball";
    this.subtitle = "A Night To Remember";
    this.description = "Breaking! Penn State Basketball upsets No. 11 Wisconsin in a neck and neck game at the Bryce Jordan Center! The final score being 87 Penn State 83 Wisconsin. Sophomore guard Kanye Clary drops 27 points to help will the Penn State Nittany Lions pass the Wisconsin Badgers. This was Penn State Men's Basketball first time beating an AP top 15 ranked opponent since the 2021 season. As a result, Penn State students cleared their seats and stormed the court to celebrate the impressive win with the basketball team. This win gives Penn State confidence and momentum as they continue to progress through their season.";
    this.image = "https://i0.wp.com/nittanysportsnow.com/wp-content/uploads/2024/01/Court-Storm.jpeg?resize=600%2C337&ssl=1";
    this.link = "https://hax.psu.edu";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 400px;
        background-color: lightgrey;
        border: 8px solid darkblue;
        margin: 12px;
        padding: 16px;
        position: relative;
        height: auto;
      }
  
      .card-text {
        position: relative;
        width: 100%;
      }
  
      .card-image {
        width: 100%;
        height: auto;
      }
  
      .btn {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        border: 2px solid blue;
        background-color: lightblue;
        color: black;
        cursor: pointer;
        border-radius: 10px;
      }
  
      .btn:hover {
        background-color: grey;
      }
    `;
  }
  
  render() {
    return html`
      <h1 class="card-title">${this.title}</h1>
      <div class="card-text">
        <h3>${this.subtitle}</h3>
        <details ?open="${this.fancy}" @toggle="${this.toggleFancy}">
          <summary>Description</summary>
          <div>
            <slot name="description">${this.description}</slot>
          </div>
        </details>
        <img class="card-image" src="${this.image}" alt="Picture of Penn State Basketball Game">
        <a href="${this.link}">
          <button class="btn">Details</button>
        </a>
      </div>
    `;
  }

  toggleFancy(e) {
    this.fancy = e.target.open;
  }
}

customElements.define('my-card', MyCard);
