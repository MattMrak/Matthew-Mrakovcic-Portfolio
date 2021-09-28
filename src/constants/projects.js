export const PROJECTS = [
  {
    id: '1',
    title: 'The American Journey',
    description:
      'Take on the challenge to visit all of the United States National Parks!',
    image: {
      src: 'https://miro.medium.com/max/1400/1*pGGa-uJCsr78cwxATeOwmg.png',
      placeholderSrc:
        'https://miro.medium.com/max/1400/1*pGGa-uJCsr78cwxATeOwmg.png',
    },
    links: {
      site: 'https://drive.google.com/file/d/1LtrV87vPjVKLr-hKHEsB3axH-VoKR37s/view?usp=sharing',
      repo: 'https://github.com/MattMrak/the-american-journey.git',
    },
    technologies: [
      'Assembled a React frontend and Rails API backend to fetch data and implement Thunk',
      'Applied Redux middleware for easy state management',
      'Built stateless components using ES6 to allow easier debugging, gained performance, and optimised code',
      'Utilized React-Router to allow re-rendering with client-side JavaScript in order to create a SPA',
    ],
  },
  {
    id: '2',
    title: "Bullet Bill's Excellent Adventure",
    description:
      'Test your skills with this awesome JavaScript Flappy Bird remake and see if you can make it onto the top 10 scoreboard!',
    image: {
      src: 'https://miro.medium.com/max/1000/1*oXuzvSWB_BMml_Xl9lW3Yg.png',
      placeholderSrc:
        'https://miro.medium.com/max/1000/1*oXuzvSWB_BMml_Xl9lW3Yg.png',
    },
    links: {
      site: 'https://drive.google.com/file/d/1HvSM7XZfC_9yyTiWZAZrUKqGE6eVF_-z/view?usp=sharing',
      repo: 'https://github.com/MattMrak/Bullet-Bills-Excellent-Adventure.git',
    },
    technologies: [
      'Utilized JavaScript frontend and Rails API backend to store and fetch data',
      'Built code that uses event listeners to handle events',
      'Applied CSS to the webpage in order to make it user friendly',
      'Applied logic to recreate a sensation of gravity and jumping resulting in smooth gameplay',
    ],
  },
  {
    id: '3',
    title: 'Agent Agenda',
    description:
      'Become a secret agent and make all of your missions possible with this fun and interactive Ruby on Rails to-do list!',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-shop/rn-shop-lg_fofglf.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://drive.google.com/file/d/1Z3nY40u1wTN2KUJohhvJGJeoTRaTUMWP/view?usp=sharing',
      repo: 'https://github.com/MattMrak/Agent-Agenda.git',
    },
    technologies: [
      'Implemented the gem ‘bcrypt’ to allow users to create a secure account',
      'Applied Google Omniauth to allow users the option to sign in through Google',
      'Built functions to allow users to comment on missions, as well as edit or delete missions through auth validations',
    ],
  },
  {
    id: '4',
    title: 'Travel Tracker',
    description:
      'The goal of this website application is to keep track of all the destinations you have visited using Sinatra.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-places/rn-places-lg_ljyikm.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://drive.google.com/file/d/1WsHTipMABE-R5RAFfdOTnPoJQhBajfJ9/view?usp=sharing',
      repo: 'https://github.com/MattMrak/Travel-Tracker.git',
    },
    technologies: [
      'Constructed the MVC model design to connect the model, views, and controller together within the app',
      'Utilized the shotgun server which allows for automatic code reloading',
      'Created code that allows a user to add, update, or delete a travel destination if they are authorized to do so',
    ],
  },
];
