# Book Exchange Platform

This is a web application for a book exchange platform where users can exchange both physical and digital books. The platform aims to connect readers, enabling them to list, search, and exchange books while fostering a community of book lovers.

## Project Setup

This project is built with React and Vite, using Supabase for backend services.

### Prerequisites

* Node.js (v18.x or later recommended)
* npm or yarn

### Installation

1.  **Clone the repository (or create project from these files):**
    ```bash
    # If you have a git repo already
    # git clone <your-repository-url>
    # cd book-exchange-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    * Create a `.env` file in the root of the project by copying the `.env.example` (if provided) or by creating it manually.
    * Add your Supabase URL and Anon Key:
        ```env
        VITE_SUPABASE_URL=your_supabase_url
        VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
        ```
    * **Note:** Vite requires environment variables exposed to the client to be prefixed with `VITE_`.

4.  **Set up Supabase:**
    * Create a project on [Supabase](https://supabase.com/).
    * In your Supabase project, go to "Project Settings" > "API" to find your Project URL and `anon` public key.
    * Set up your database schema as required (users, books, exchanges, etc.).
    * Enable authentication providers if needed.

### Running the Development Server

1.  **Start the Vite development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the port Vite assigns).

### Building for Production

1.  **Create a production build:**
    ```bash
    npm run build
    # or
    yarn build
    ```
    This will create a `dist` folder with the optimized static assets.

### Key Technologies

* **Frontend:** React, Vite
* **Routing:** React Router DOM
* **Styling:** Global CSS (with CSS Variables for theming), Tailwind CSS (optional, can be added)
* **Backend:** Supabase (Authentication, PostgreSQL Database, Storage)
* **State Management:** React Context API

### Project Structure

book-exchange-app/├── public/                   # Static assets (index.html)├── src/│   ├── assets/               # Fonts, base images, global styles│   ├── components/           # Reusable UI components (Auth, Books, Common, etc.)│   ├── contexts/             # React Context (Auth, Theme, Notifications)│   ├── hooks/                # Custom React Hooks│   ├── pages/                # Top-level page components│   ├── services/             # Supabase API interaction modules│   ├── config/               # Supabase client initialization│   ├── App.jsx               # Main application component with routing│   └── main.jsx              # Entry point of the React application├── .env                      # Environment variables├── .gitignore├── package.json└── README.md
### Themeing

The application supports light and dark themes. The theme is managed via `ThemeContext` and applied to the `<html>` element using `.light` or `.dark` classes. CSS variables in `src/assets/styles/global.css` define the color schemes.