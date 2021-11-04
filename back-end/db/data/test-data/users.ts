import { User } from '../../../src/models/user.model';

const users: (Omit<User, 'saved'> & { saved: string[] })[] = [
  {
    name: 'John Johnson',
    email: 'john@johnmail.john',
    password: 'johnpass',
    topics: ['javascript', 'mongodb'],
    media: ['podcasts'],
    saved: ['617ffbea8bae4425133b1fe5'],
    username: 'j0hntr0n',
    avatarUrl:
      'https://metro.co.uk/wp-content/uploads/2020/05/PRI_151662478.jpg?quality=90&strip=all',
  },
  {
    name: 'Bread Manbread',
    email: 'Bread@breadmail.com',
    password: 'breadcake',
    topics: ['Javascript', 'Python'],
    media: ['Podcasts'],
    saved: ['617ffbea8bae4425133b1fe5'],
    username: 'ManBre@d',
    avatarUrl: 'https://www.melskitchencafe.com/wp-content/uploads/french-bread-roll1.jpg',
  },
  {
    name: 'Danny MOAR',
    email: 'DMOAR@protonmail.com',
    password: 'supersafe123',
    topics: ['TypeScript', 'C++'],
    media: ['mooc, articles, books'],
    saved: ['617ffbea8bae4425133b1fe5'],
    username: 'D-man2k21',
    avatarUrl:
      'https://images.immediate.co.uk/production/volatile/sites/3/2019/08/Keanu-Reeves-5939c06.jpg?quality=90&resize=620%2C413',
  },
  {
    name: 'Alex Swine',
    email: 'Swalex@mail.ru',
    password: 'iLik3boatz',
    topics: ['html', 'css', 'Rust'],
    media: ['careers', 'distance learning'],
    saved: ['617ffbea8bae4425133b1fe5'],
    username: 'Sea-man01',
    avatarUrl:
      'https://www.royalnavy.mod.uk/-/media/careers-section-redesign/homepage/uniform-updates/7_whynavy_benefits_981x551.jpg?h=551&w=981&rev=9cdcc91ac1b140aeaad7b025bd7fa2b0&cropregion=0,0,0,0&hash=A5E49F6696BE1627101D511D083F51F4',
  },
];

export default users;
