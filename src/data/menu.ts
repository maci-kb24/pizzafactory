export const menu = [
  {
    category: 'Pizza',
    items: [
      {
        id: 1,
        name: 'Маргарита пица',
        ingredients: 'Кечап, кашкавал, оригано',
        price: 600,
        currency: 'ден.',
      },
      {
        id: 2,
        name: 'Pepperoni',
        ingredients: 'Tomato, mozzarella, pepperoni',
        price: 750,
        currency: 'ден.',
      },
      {
        id: 3,
        name: 'Hawaiian',
        ingredients: 'Tomato, mozzarella, ham, pineapple',
        price: 800,
        currency: 'ден.',
      },
    ],
  },
  {
    category: 'Drinks',
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
    category: 'Desserts',
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