import './style.css';
import { listPets } from './type.ts';
import { Header } from './header.ts';
import { Footer } from './footer.ts';
import { Card } from './card.ts';

new Header('body');
new Footer('body');
new listPets('body').map((item) => new Card('main', item));
