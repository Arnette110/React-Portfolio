const Items = [
  {
    id: 8,
    title: 'Wonderful Workday Planner',
    image: '/assets/images/day-planner-screenshot.png',
    alt: 'day planner screenshot',
    deployed: 'https://arnette110.github.io/Wonderful-Workday-Planner/',
    source_code: 'https://github.com/Arnette110/Wonderful-Workday-Planner',
    about:
      'This application is a day planner that allows the user to save events, via local storage, for each hour of the day. Time slots are color coded for past, present and future. This changes depending on the time of day.',
  },
  {
    id: 7,
    title: 'Wild Weather App',
    image:
      '/assets/images/2020-01-04 20_46_40-Wild Weather App-with-inputs.png',
    alt: 'weather app screenshot',
    deployed: 'https://arnette110.github.io/Wild-Weather-App/',
    source_code: 'https://github.com/Arnette110/Wild-Weather-App',
    about:
      'A simple weather dashboard created with HTML, CSS(Bulma), jQuery, OpenWeather API and moment.js. This app saves searches in local storage and displays them as a button for faster re-search.',
  },
  {
    id: 6,
    title: 'Scrabble Party App',
    image: '/assets/images/definition-soundcloud.png',
    alt: 'scrabble party app screenshot',
    isDeployed: 'Deployed',
    deployed: 'https://arnette110.github.io/Scrabble-Party-App/',
    source_code: 'https://github.com/Arnette110/Scrabble-Party-App',
    about:
      'A dictionary app designed to accompany a rousing game of Scrabble. This was a group project where I was responsible for connecting user input with AJAX calls and displaying the results.',
  },
  // {
  //   id: 13,
  //   title: 'Employee Tracker',
  //   image: '/assets/images/profile-generator.gif',
  //   alt: 'Employee Tracker gif',
  //   source_code: 'https://github.com/Arnette110/PDF-Generator',
  //   about: '',
  // },
  {
    id: 5,
    title: 'PDF Generator',
    image: '/assets/images/profile-generator.gif',
    alt: 'PDF generator gif',
    source_code: 'https://github.com/Arnette110/PDF-Generator',
    about:
      'A Node CLI application that dynamically generates a PDF profile from a GitHub username. This app utilizes inquirer to gather user input and axios to call the GitHub API.',
  },
  {
    id: 4,
    title: 'Dynamic Team Generator',
    image: '/assets/images/team-generator.gif',
    alt: 'team generator gif',
    source_code: 'https://github.com/Arnette110/Dynamic-Team-Generator',
    about:
      'A Node command line interface(CLI) application that gathers information from the user, through inquirer, and dynamically creates and HTML page based on user input. This app uses jest for testing purposes.',
  },
  {
    id: 3,
    title: 'Notable Note Taker',
    image: '/assets/images/2020-02-10 18_00_45-Note Taker.png',
    alt: 'note taker app screenshot',
    deployed: 'https://agile-peak-63140.herokuapp.com/',
    source_code: 'https://github.com/Arnette110/Notable-Note-Taker',
    about:
      'This is an application that can be used to write, save, and delete notes. This application uses an Express backend and saves and retrieves note data from a JSON file.',
  },
  {
    id: 2,
    title: 'GalactChris Devourer Of Burgers',
    image: '/assets/images/screenshot-GalactChris Devourer Of Burgers.png',
    alt: 'burger app screenshot',
    deployed: 'https://sheltered-citadel-94305.herokuapp.com/',
    source_code:
      'https://github.com/Arnette110/GalactChris-devourer-of-burgers',
    about:
      'An MVC design pattern app that allows a user to order a burger and devour it, re-order it or delete it form the DB using MySQL, Node, Express, Handlebars and a homemade ORM.',
  },
  {
    id: 1,
    title: 'Stock Watcher',
    image: '/assets/images/2020-03-18 15_07_28-Stock Watcher!.png',
    alt: 'stock watcher app',
    deployed: 'https://quiet-scrubland-40925.herokuapp.com/',
    source_code: 'https://github.com/Arnette110/stock-shares-viewer',
    about:
      'An MVC app built with MySQL, Express and Node. Working in a team of three I integrated charts from Canvas.js with JSON data received from API calls. I was also responsible for the layout and design.',
  },
  {
    id: 10,
    title: 'Caching Budgets',
    image: '/assets/images/2020-04-16 20_19_17-Caching-Budgets.png',
    alt: 'caching budgets app',
    deployed: 'https://lychee-cobbler-11074.herokuapp.com/',
    source_code: 'https://github.com/Arnette110/Caching-Budgets',
    about:
      'This app allows a user to track deposits and withdrawals. Transactions are logged even if the user is offline through the use of caching and indexDB. Created with MongoDB, Express and Node.',
  },
  {
    id: 11,
    title: 'Employee DireActory',
    image: '/assets/images/2020-04-16 20_24_25-Employee-Directory.png',
    alt: 'employee directory app',
    deployed: 'https://arnette110.github.io/Employee-DireActory/',
    source_code: 'https://github.com/Arnette110/Employee-DireActory',
    about:
      'An employee directory app created with React utilizing Hooks. The user is able to search for an employee and sort the table in ascending or descending order by column.',
  },
  {
    id: 12,
    title: 'Trade & Play',
    image: '/assets/images/trade-and-play.png',
    alt: 'trade and play app',
    deployed: 'https://trade-and-play.herokuapp.com/',
    source_code: 'https://github.com/Arnette110/Trade-and-Play',
    about:
      'A full stack MERN app where I worked in a team of five and was responsible for implementing the front-end style/design and user interactivity through the use of React.',
  },
]

export default Items
