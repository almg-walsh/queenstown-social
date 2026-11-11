export const site = {
  name: 'Queenstown Social',
  email: 'hello@queenstownsocial.nz',
  addressLines: ['12 Camp Street', 'Queenstown', '9300'],
  phone: '+64 3 442 0100',
}

export const hours = [
  { days: 'Wednesday – Friday', time: '8am – 3pm' },
  { days: 'Saturday – Sunday', time: '8am – 4pm' },
  { days: 'Monday – Tuesday', time: 'Closed' },
]

export const aboutCopy = [
  'Queenstown Social has been serving brunch and long coffees beside the lake since 2018.',
  'A lot has changed around town since then, but the brief has not: good produce, a calm room, and food we actually want to eat on our days off.',
  'We work with small growers, bakers and roasters around the South Island. The menu moves with the seasons, with a few house staples that refuse to leave.',
]

export const menuNotes = [
  'The menu changes seasonally and may differ from the sample shown.',
  'Weekdays are savoury-led. Weekends we lean into pancakes, fruit and a slower room.',
  'Vegan and gluten-free options are always available — ask and we will walk you through it.',
  'Card only, and a discretionary 10% service charge is added to bills over $40. It all goes to the floor.',
]

export const suppliers = [
  {
    heading: 'coffee',
    items: [
      'Ozone — New Zealand roast, rotating guest filter',
      'Mojo — Wellington for espresso blends',
    ],
  },
  {
    heading: 'baking',
    items: [
      'Our own kitchen for sourdough and pastry',
      'Le Relais — Arrowtown for weekend croissants',
    ],
  },
  {
    heading: 'dairy, eggs + cheese',
    items: [
      'Mahoe Farmhouse — Banks Peninsula cheeses',
      'Local eggs from Gibbston Valley',
    ],
  },
  {
    heading: 'fruit & veg',
    items: [
      'Central Otago stone fruit in season',
      'Wakatipu growers for greens and herbs',
    ],
  },
]

export type MenuItem = {
  name: string
  detail: string
  price: string
}

export type MenuSection = {
  title: string
  items: MenuItem[]
}

export const sampleMenu: MenuSection[] = [
  {
    title: 'To start',
    items: [
      {
        name: 'Seasonal fruit + house yoghurt',
        detail: 'toasted seeds, local honey',
        price: '16',
      },
      {
        name: 'Sourdough, cultured butter',
        detail: 'with marmalade or Vegemite',
        price: '9',
      },
      {
        name: 'Granola bowl',
        detail: 'oat milk or yoghurt, poached pear',
        price: '18',
      },
    ],
  },
  {
    title: 'Plates',
    items: [
      {
        name: 'Eggs on toast',
        detail: 'poached, scrambled or fried, soft herbs',
        price: '19',
      },
      {
        name: 'Smoked warehou, potato cake',
        detail: 'soft egg, dill yoghurt, pickled fennel',
        price: '28',
      },
      {
        name: 'Mushroom toast',
        detail: 'thyme butter, whipped feta, chilli oil',
        price: '24',
      },
      {
        name: 'Social burger',
        detail: 'beef, cheddar, pickles, aioli, fries',
        price: '26',
      },
      {
        name: 'Weekend pancakes',
        detail: 'buttermilk, berries, maple — weekends only',
        price: '22',
      },
    ],
  },
  {
    title: 'Drinks',
    items: [
      {
        name: 'Espresso / batch filter',
        detail: 'oat, almond or dairy',
        price: '5 / 6',
      },
      {
        name: 'House chai or hot chocolate',
        detail: '',
        price: '6',
      },
      {
        name: 'Fresh juice',
        detail: 'orange, apple, or green',
        price: '8',
      },
      {
        name: 'Natural wine, beer',
        detail: 'ask for what is open',
        price: '12+',
      },
    ],
  },
]

export const images = {
  hero:
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80',
  kitchen:
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
  interior:
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
  coffee:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  table:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
    logo: 
    './src/assets/logo.png'
}
