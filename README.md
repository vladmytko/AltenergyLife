# Altenergy.life – Client Website (Freelance Project)

This project is a **freelance website developed for a client** in the renewable energy sector.  
The client has **granted permission for this website to be showcased in my portfolio**.

🔗 Live website: https://altenergy-life.vercel.app/ 

---

## Project Overview

Altenergy.life is a modern, responsive website designed to present the client’s renewable energy services, strategy offerings, certifications, and contact information in a clear and professional way.

The website was built as a **single-page application (SPA)** with additional routes for service pages and legal content.

---

## Client & Usage Disclaimer
- This website was created for a client.
- All content and branding to the client.
- The project is displayed here for portfolio and demonstration purposes only, with the client’s consent.
- The code may be reused as a reference, but the design and content should not be copied for commercial use.
---

## Tech Stack

- **React**
- **React Router**
- **Tailwind CSS**
- **Vite**
- **Vercel** (deployment)

---

## Features

- Responsive design (mobile-first)
- Smooth scrolling and section navigation
- Client-side routing (React Router)
- Dedicated pages for:
  - Strategy Services
  - About
  - Privacy Policy
- SEO-friendly structure
- Deployed on Vercel with SPA routing configuration

---

## Project Structure

src/
├── components/
│   ├── MainPage/
│   ├── StrategyComponents/
│   └── PrivacyPolicy/
├── App.jsx
├── main.jsx
└── index.css

---

## Deployment

The application is deployed on **Vercel**.

Since this is a Single Page Application, routing is handled via a rewrite rule to prevent 404 errors on page refresh:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
