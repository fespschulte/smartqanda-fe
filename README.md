# Smart Q & A

Smart Q & A is a modern, scalable web application designed for real-time question and answer sessions. Built with a focus on engineering best practices, it leverages a robust React/TypeScript stack, advanced state management, and a highly customizable UI framework.

---

## Table of Contents

- [Architecture](#architecture)
- [Tech Stack & Libraries](#tech-stack--libraries)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Development Scripts](#development-scripts)
- [Engineering Practices](#engineering-practices)
- [Backend API](#backend-api)
- [License](#license)

---

## Architecture

- **Frontend:** React 19, TypeScript, Vite, React Router DOM
- **State Management:** @tanstack/react-query for async state and caching
- **Styling:** Tailwind CSS 4, tw-animate-css, custom CSS variables, dark mode support
- **UI Components:** Modular, with shadcn/ui conventions and Lucide icons
- **Linting/Formatting:** Biome and Ultracite rules
- **Build Tool:** Vite 7, with plugin-based extensibility

---

## Tech Stack & Libraries

### Core Libraries

- **React** (`react`, `react-dom`): Declarative UI, hooks-based architecture
- **TypeScript**: Static typing, strict mode enabled for reliability
- **Vite**: Lightning-fast build tool and dev server
- **React Router DOM**: SPA routing and navigation
- **@tanstack/react-query**: Server state management, caching, and async flows

### Styling & UI

- **Tailwind CSS**: Utility-first CSS framework, custom theme via CSS variables
- **tw-animate-css**: Animation utilities for Tailwind
- **class-variance-authority**: Manage complex className logic
- **clsx**: Conditional className utility
- **tailwind-merge**: Merge Tailwind classes safely
- **Lucide React**: Icon library for consistent, modern icons

### Tooling & Quality

- **@vitejs/plugin-react**: React fast refresh and optimizations for Vite
- **@biomejs/biome**: Linting, formatting, and code quality
- **@eslint/js**: JavaScript linting
- **Ultracite**: Strict code quality and accessibility rules

### Types & Dev Experience

- **@types/react**, **@types/react-dom**, **@types/node**: TypeScript type definitions

---

## Project Structure

```
web/
  ├── src/
  │   ├── app.tsx           # Main app component, providers, routing
  │   ├── main.tsx          # App entry point
  │   ├── index.css         # Global styles, Tailwind, custom theme
  │   ├── lib/
  │   │   └── utils.ts      # Utility functions (e.g., cn for class merging)
  │   └── pages/
  │       ├── create-room.tsx # Room creation and listing
  │       └── room.tsx        # Room details page
  ├── index.html            # HTML template
  ├── vite.config.ts        # Vite build configuration
  ├── tsconfig*.json        # TypeScript configuration
  ├── biome.jsonc           # Biome lint/format config
  └── components.json       # UI conventions, icon library
```

---

## Setup Instructions

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Development Scripts

- `dev`: Launches Vite dev server with hot module reload
- `build`: Type-checks and builds the app for production
- `preview`: Serves the production build locally

---

## Engineering Practices

- **Strict TypeScript:** All code is type-checked with strict settings for safety
- **Atomic Commits:** Use [gitmoji](https://gitmoji.dev/) for clear, semantic commit messages
- **Accessibility:** Follows strict accessibility rules (Ultracite, Biome)
- **Code Quality:** Enforced by Biome, ESLint, and Ultracite
- **Modular Design:** Components and utilities are reusable and isolated
- **Alias Imports:** Use `@/` for absolute imports from `src/`
- **Dark Mode:** Fully supported via Tailwind and custom CSS variables
- **Custom Theming:** Easily adjustable via CSS variables in `index.css`

---

## Backend API

This frontend expects a backend API running at `http://localhost:3333` with the following endpoint:

- `GET /rooms` — Returns a list of rooms (id, name, description, createdAt)

> **Note:** You must have the backend running for the app to function. Adjust the API URL in the code if your backend runs elsewhere.
