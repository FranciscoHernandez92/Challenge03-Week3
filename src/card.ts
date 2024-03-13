import { Component } from './component';

export class Card extends Component {
  pet: object;
  constructor(selector: string, pet: object) {
    super(selector);
    this.pet = pet;
    this.render();
  }

  render(): void {
    this.template = this.createTemplate();
    super.render();
  }

  dataPet = (pet: any) => `
    <li>Id: ${pet.id}</li>
    <li>Name: ${pet.name}</li>
    <li>Breed: ${pet.breed}</li>
    <li>Adopted: ${pet.isAdopted}</li>
    `;

  createTemplate() {
    const item = this.pet;
    return `
    <ul>
    <li>${this.dataPet(item)}</li>
    </ul>
    `;
  }
}
