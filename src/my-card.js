import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title="Activity 2: Penn State Basketball";
    this.subtitle="A Night To Remember";
    this.description="Breaking! Penn State Basketball upsets No. 11 Wisonsin in a neck and neck game at the Bryce Jordan Center! The final score being 87 Penn State 83 Wisconsin. Sophmore guard Kanye Clary drops 27 points to help will the Penn State Nittany Lions pass the Wisonson Badgers. This was Penn State Men's Basketball first time beating an AP top 15 ranked opponent since the 2021 season. As a result Penn State students cleared their seats and stormed the court to celebrate the impressive win with the basketball team. This win gives Penn State confidence and momentum as they continue to progress through their season.";
    this.image="https://i0.wp.com/nittanysportsnow.com/wp-content/uploads/2024/01/Court-Storm.jpeg?resize=600%2C337&ssl=1";
    this.link="https://hax.psu.edu";
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
      }

      h1, h2, p {
        margin: 0;
        padding: 0;
      }

      .card-image {
        max-width: 100%;
        height: auto;
        margin-top: 16px;
      }

      .btn {
        background-color: lightblue;
        border: 2px solid darkblue;
        color: darkblue;
        font-size: 20px;
        border-radius: 15%;
        padding: 8px 16px;
        margin-top: 16px;
        cursor: pointer;
      }

      .btn:focus,
      .btn:hover {
        background-color: darkgrey;
      }
    `;
  }

  render() {
    return html`
    <h1 class="card-title">${this.title}</h1>
    <div class="card-text">
      <h3>${this.subtitle}</h3>
      <p>${this.description}</p>
        <img class="card-image" src="${this.image}" alt="Picture of Penn State Basketball Game">
        <a href="${this.link}">
        <button class="btn">Details</button>
  </a>
  </div>
  `;
  }

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String},
      description: { type: String},
      image: { type: String},
      link: { type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
