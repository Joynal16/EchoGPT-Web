# EchoGPT Redesign

GitHub Repository: echogpt-redesign

## Project Overview
This project is a redesign concept for EchoGPT, a multi-model AI assistant experience that allows users to compare responses from multiple AI providers in one place. The interface includes a marketing landing page, a browser-based app view, and a Chrome extension popup experience designed to feel fast, modern, and lightweight.

The app is built as a Next.js project and presents a polished product concept for an EchoGPT ecosystem with the following experiences:
- Landing page at `/`
- Web app at `/app`
- Extension popup at `/extension`

## Setup Instructions
### Prerequisites
- Node.js 18 or later
- npm

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```
Then open http://localhost:3000 in your browser.

### Production build
```bash
npm run build
npm run start
```

### Deploy
This project is ready to deploy to Vercel or any host that supports Next.js applications.

## Technologies Used
- Next.js 16
- React 18
- TypeScript
- Framer Motion
- CSS for styling and design tokens

## Assumptions
- The original EchoGPT product was used as a design reference rather than a pixel-perfect clone.
- The app is a front-end redesign concept and does not integrate with real AI provider APIs yet.
- Model data and sample responses are represented as mock content for demonstration purposes.
- The product is designed for browser-first use and does not include backend persistence or authentication.

## Additional Features Implemented
- Multi-model promo layout with provider chips
- Interactive theme toggle with light/dark mode support
- Animated product sections using Framer Motion
- Extension-style popup interface with tabs for Chat, History, and Settings
- Quick action buttons for model-based prompts
- Responsive card layout for product features
- Accessible UI patterns including labels, roles, and button-based controls
- Model comparison-ready presentation for future chat integrations

## Project Structure
```text
app/
  app/
  extension/
  globals.css
  layout.tsx
  page.tsx
components/
  ModelChips.tsx
  ThemeToggle.tsx
lib/
  models.ts
```

## Notes
This repository focuses on the visual redesign and interaction patterns for the product concept. The next phase would typically include real API connections, persistent chat history, and production-ready Chrome extension packaging.
