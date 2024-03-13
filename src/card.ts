import { Component } from './component';

export class Card extends Component {
  listpets: listPets;
  constructor(selector: string, listPets: object) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    this.listpets = listPets;
  }
  createTemplate() {
    return `

    `;
  }
}
