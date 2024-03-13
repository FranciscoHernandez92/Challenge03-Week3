/* eslint-disable no-new */
import './style.css';
import { listPets } from './type.ts';
import { Header } from './header.ts';
import { Footer } from './footer.ts';
import { Card } from './card.ts';
import { title } from 'process';
import { List } from 'list';

const title = 'Pet Web';

new Header('body', title);
new Footer('body');
new List('body');
listPets.forEach((item) => {
  new Card('.pets', item);
});
