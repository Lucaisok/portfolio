# Portfolio Website

Personal portfolio built with Next.js, React, and TypeScript to showcase selected projects, skills, and contact details.

## Overview

This project is a content-driven portfolio application with:

- A landing page with hero section
- Dedicated About, Projects, and Contact pages
- Dynamic project detail pages via slug-based routing
- Reusable section-based component architecture
- Static content source files for easy updates

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS Modules
- Lucide React icons
- Motion (animations)

## Routes

- `/` Home
- `/about` About
- `/projects` Projects list
- `/projects/[slug]` Project detail page
- `/contact` Contact

## Project Structure

```text
src/
	app/                 # App Router pages and route-level styles
	components/          # Reusable UI sections grouped by page domain
	content/             # Global copy/content objects
	hooks/               # Client hooks (mobile checks, weather)
	lib/                 # Static data (projects, contacts, routes)
	types/               # Shared TypeScript types
public/
	projects/            # Project images used in cards/detail pages
	cv.pdf               # Downloadable CV exposed in contact section
```

## Content Management

Most portfolio data is centralized in a few files:

- `src/content/global.ts`: text content for hero, about, contact, footer, 404
- `src/lib/projects.ts`: project entries (slug, descriptions, assets, links, tags)
- `src/lib/contacts.ts`: email/social links and CV download metadata
- `src/lib/routes.ts`: route constants and navigation links

When adding a new project:

1. Add a new object in `src/lib/projects.ts` with a unique `slug`.
2. Place associated images under `public/projects/<project-folder>/`.
3. Ensure image paths in the project object match the files in `public/`.

## Weather Hook

The app includes a Berlin weather hook:

- `src/hooks/useBerlinWeather.ts`

It fetches current weather code data from Open-Meteo and maps it to a local weather label. The hook gracefully falls back if the API is unavailable.

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+ (or compatible package manager)

### Install

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open http://localhost:3000

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Scripts

- `npm run dev` Start local development server
- `npm run build` Build production bundle
- `npm run start` Start production server
- `npm run lint` Run ESLint
