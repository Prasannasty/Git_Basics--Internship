const projects = [
  {
    id: "shopping-cart",
    title: "Shopping Cart App",
    description: "An eCommerce cart built with Node.js and Express.",
    details:
      "This Shopping Cart App is built using Node.js, Express, and basic HTML. It supports full CRUD operations on products, stores data in JSON, and displays real-time updates in the UI with confirmation popups.",
    github: "https://github.com/navadhiti-2025/shopping-cart-app",
    live: "https://your-live-link.com/shopping-cart",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    features: [
      "Users can add, edit, or delete products with live form validations and confirmation messages after each operation, ensuring data accuracy.",
      "All data is stored and retrieved from a local JSON file, simulating a lightweight database backend using file system operations.",
      "A clean and responsive user interface that adapts well to desktop and mobile screen sizes using custom CSS styling.",
    ],
    skills: [
      { name: "Node.js", progress: 85 },
      { name: "Express.js", progress: 80 },
      { name: "HTML/CSS", progress: 90 },
      { name: "JavaScript", progress: 75 },
    ],
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description: "Task manager with Firebase and real-time sync.",
    details:
      "The Task Manager is a productivity app built using Express and Firebase Firestore. Users can create, update, or delete tasks and view real-time changes in a collaborative environment.",
    github: "https://github.com/navadhiti-2025/task-manager",
    live: "https://your-live-link.com/task-manager",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    features: [
      "Integrated with Firebase Firestore for real-time database operations with instant UI feedback as users add or delete tasks.",
      "Includes task priority and due-date features, with color-coded labels and calendar-based deadline reminders for user clarity.",
      "Simple and elegant layout with responsive design powered by MUI and custom CSS for consistent cross-platform performance.",
    ],
    skills: [
      { name: "Firebase", progress: 90 },
      { name: "React", progress: 85 },
      { name: "MUI", progress: 80 },
      { name: "JavaScript", progress: 75 },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Personal portfolio with projects and contact form.",
    details:
      "This is a modern developer portfolio made using React and MUI. It contains dynamic routing, authentication, theme toggle, and showcases all major projects in a responsive layout.",
    github: "https://github.com/navadhiti-2025/portfolio-website",
    live: "https://your-live-link.com/portfolio",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    features: [
      "Switch between light and dark themes using a context-based theme provider, saving user preferences in localStorage.",
      "Fully responsive and mobile-first design layout using Material UI with animated transitions and card effects.",
      "Includes contact form with validation, GitHub repo links, and individual project detail pages with breadcrumb navigation.",
    ],
    skills: [
      { name: "React", progress: 95 },
      { name: "MUI", progress: 90 },
      { name: "React Router", progress: 85 },
      { name: "Context API", progress: 80 },
    ],
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "Weather forecast app using OpenWeather API.",
    details:
      "This weather forecast app fetches real-time weather information by integrating with the OpenWeatherMap API. It supports city-based search and displays current temperature, humidity, and icons.",
    github: "https://github.com/navadhiti-2025/weather-app",
    live: "https://your-live-link.com/weather-app",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    features: [
      "Fetches real-time weather data for any city using the OpenWeatherMap API and displays it with relevant weather icons.",
      "Built with React and styled using custom CSS, the layout is both mobile-friendly and visually engaging with loading spinners.",
      "Handles error cases such as invalid city names and shows meaningful messages to guide the user for better UX.",
    ],
    skills: [
      { name: "React", progress: 90 },
      { name: "API Integration", progress: 85 },
      { name: "OpenWeather API", progress: 80 },
      { name: "CSS", progress: 70 },
    ],
  },
];

export default projects;
