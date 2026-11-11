export const site = {
  name: 'Queenstown Social',
  email: 'queenstownsocialcafe@gmail.com',
  addressLines: ['36 Queenstown Road', 'Battersea', 'SW8 3RY'],
  socialLinks: '@queenstownsocialcafe',
  instagramUrl: 'https://www.instagram.com/queenstownsocialcafe',

}

export const hours = [
  { days: 'Monday – Friday', time: '7:30am – 3pm' },
  { days: 'Saturday – Sunday', time: '8am – 4pm' },
]

export const aboutCopy = [
  'Queenstown Social has been serving brunch, coffee and delicious pastry in Battersea since December 2025.',
  'A lot has changed around town since then, but the brief has not: good produce, a calm room, and food we actually want to eat on our days off.',
  'We work with small farms, butchers, bakers and roasters around the south of England. The menu changes regularly, with a few house staples that refuse to leave.',
]

export const menuNotes = [
  'Vegan and gluten-free options are always available — ask and we will walk you through it.',
  'Card and cash accepted, and a discretionary 10% service charge is added to bills for customers that choose to dine in with us. It all goes to the floor.',
]

export const suppliers = [
  {
    heading: 'coffee',
    items: [
      'Uniform — Single origin beans roasted in Bermondsey for espresso, decaf and retail',
      'Coborn — For guest espresso',
    ],
  },
  {
    heading: 'baking',
    items: [
      'Seven Seeded — sourdough and pastry baked fresh daily',
    ],
  },
  {
    heading: 'dairy & eggs',
    items: [
      'Northiam Dairy - Milk and cream from a small farm in East Sussex',
      'Fenton farm eggs - Free range eggs from a small farm in Somerset',
    ],
  },
  {
    heading: 'meat & fish',
    items: [
      'Butchers Block - Small batch, ethically sourced meat from a family butcher in Banstead',
      'Life of Fish - Sustainable fish from a small family run supplier in Abbeville Road',
    ],
  },
]

export const sampleMenuHeading = 'A small snapshot. Ask about vegan and gluten-free swaps.'

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
    title: 'Brunch',
    items: [
      {
        name: 'House Granola (gf)',
        detail: 'Orange and cardamom granola, hung yoghurt.',
        price: '10',
      },
      {
        name: 'French Toast of the week',
        detail: '',
        price: '14',
      },
      {
        name: 'The Social Avo toast',
        detail: 'Camomile and smoked almond dukkah, barrel-aged feta and hot honey',
        price: '14.5',
      },
      {
        name: 'Eggs Social',
        detail: 'Eggs anyway served on sourdough with cultured butter',
        price: '9.5',
      },
      {
        name: 'Salmon Teriyaki and Avo',
        detail: 'Toast with pickle chillies, crispy shallots and lime',
        price: '16',
      },
      {
        name: 'The Social Breakfast bap',
        detail: 'Old spot sausage patty, streaky bacon, house hash browns, fried egg, chipotle ketchup and manchego',
        price: '16.5',
      },
      {
        name: 'Sweetcorn and spring onions fritters (gf)',
        detail: 'Fenton Farm eggs, halloumi, avo, south indian tomato chutney',
        price: '16',
      },
      {
        name: 'Eggs Börek',
        detail: 'Poached eggs, spinach, dill, feta, crispy chilli oil, served on sourdough',
        price: '15',
      },
    ],
  },
  {
    title: 'Sides',
    items: [
      {
        name: 'House hash browns',
        detail: '',
        price: '6',
      },
      {
        name: 'Crispy Butchers Block streaky bacon',
        detail: '',
        price: '5',
      },
      {
        name: 'Side of avo',
        detail: '',
        price: '4.5',
      },
      {
        name: 'Extra toast',
        detail: '',
        price: '3.5',
      },
      {
        name: 'Extra eggs any way',
        detail: '',
        price: '4.5',
      },
      {
        name: 'Halloumi',
        detail: '',
        price: '5',
      },
      {
        name: 'Old spot sausage patty',
        detail: '',
        price: '5',
      },
    ],
  },
  {
    title: 'Coffee',
    items: [
      {
        name: 'Espresso',
        detail: '',
        price: '3',
      },
      {
        name: 'Macchiato',
        detail: '',
        price: '3.2',
      },
      {
        name: 'Latte',
        detail: '',
        price: '4',
      },
      {
        name: 'Flat white',
        detail: '',
        price: '4',
      },
      {
        name: 'Cappuccino',
        detail: '',
        price: '4.3',
      },
      {
        name: 'Long black/Americano',
        detail: '',
        price: '3.5',
      },
      {
        name: 'Matcha Latte',
        detail: '',
        price: '4.5',
      },
      {
        name: 'Chai Latte',
        detail: '',
        price: '4.5',
      },
      {
        name: 'Hot Chocolate',
        detail: '',
        price: '4.5',
      },
      {
        name: 'Loose Leaf Teas',
        detail: '',
        price: '3.5',
      },
      {
        name: 'Alternative milks',
        detail: '',
        price: '0.3',
      },
      {
        name: 'Ice',
        detail: '',
        price: '0.3',
      },
    ],
  },
  {
    title: 'Drink',
    items: [
      {
        name: 'Momo kombucha',
        detail: '',
        price: '6',
      },
      {
        name: 'Freshly squeezed orange juice',
        detail: '',
        price: '6',
      },
      {
        name: 'Hildon water (750ml)',
        detail: '',
        price: '5',
      },
      {
        name: 'Jamu Soft Drinks',
        detail: '',
        price: '5',
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
    logo: './src/assets/logo.png',
    logoLight: './src/assets/logo-light.png',
}
