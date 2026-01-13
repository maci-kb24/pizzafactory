import margarita from '../assets/images/margarita.jpg';
import vesuvio from '../assets/images/vesuvio.jpg';
import capricciosa from '../assets/images/capricciosa.jpg';

export const menuItems = [
  {
    category: 'Пици',
    items: [
      {
        id: 1,
        name: 'Маргарита',
        ingredients: 'Кечап, кашкавал, оригано',
        price: 320,
        currency: 'ден.',
        image: margarita,
      },
      {
        id: 2,
        name: 'Везувио',
        ingredients: 'Кечап, кашкавал, шунка, оригано',
        price: 340,
        currency: 'ден.',
        image: vesuvio,
      },
      {
        id: 3,
        name: 'Капричоза',
        ingredients: 'Кечап, кашкавал, шунка, печурки, оригано',
        price: 360,
        currency: 'ден.',
        image: capricciosa,
      },
    ],
  },
  {
    category: 'Пијалоци',
    items: [
      {
        id: 3,
        name: 'Coca-Cola',
        price: 200,
        currency: 'ден.',
      },
      {
        id: 4,
        name: 'Orange Juice',
        price: 250,
        currency: 'ден.',
      },
      {
        id: 5,
        name: 'Lemonade',
        price: 250,
        currency: 'ден.',

      },
    ],
  },
  {
    category: 'Десерти',
    items: [
      {
        id: 6,
        name: 'Chocolate Cake',
        ingredients: 'Rich chocolate cake with ganache',
        price: 400,
        currency: 'ден.',
      },
      {
        id: 7,
        name: 'Ice Cream',
        ingredients: 'Vanilla, chocolate, or strawberry',
        price: 150,
        currency: 'ден.',
      },
      {
        id: 8,
        name: 'Tiramisu',
        ingredients: 'Coffee-flavored Italian dessert',
        price: 560,
        currency: 'ден.',
      },
    ],
  }
]
export type MenuItem = {
  id: number;
  name: string;
  ingredients?: string;
  price: number;
  currency: string;
};
export type MenuCategory = {
  category: string;
  items: MenuItem[];
};