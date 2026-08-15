# Polypath 🗺️

> Learn any language, the right way.

Polypath is a structured language learning platform offering step-by-step roadmaps, curated resources, exam guides, and book recommendations for Spanish, French, Japanese, German, and Korean.

**Live:** [polypath-delta.vercel.app](https://polypath-delta.vercel.app)

---

## Features

- **Language Roadmaps** — Level-by-level learning paths (A1→C2 / N5→N1) with curated resources at each stage
- **Exam Guides** — Detailed guides for DELE, DELF, JLPT, Goethe-Zertifikat, and TOPIK
- **Progress Tracking** — Mark levels as complete and track your journey across all languages
- **Book Store** — Handpicked book recommendations with Amazon and Flipkart links
- **User Auth** — Sign up, log in, and save your progress across sessions
- **User Dashboard** — Visual progress overview across all 5 languages

---

## Tech Stack

| Layer              | Technology            |
| ------------------ | --------------------- |
| Frontend           | React 19 + Vite       |
| Styling            | Tailwind CSS v4       |
| Routing            | React Router v6       |
| State Management   | Zustand               |
| Data Fetching      | TanStack Query        |
| Animations         | Framer Motion         |
| Backend / Database | Supabase (PostgreSQL) |
| Authentication     | Supabase Auth         |
| Hosting            | Vercel                |

---

## Pages

| Route                    | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| `/`                      | Landing page with language cards and how it works        |
| `/languages/:id`         | Language overview — about, timeline, why learn it        |
| `/languages/:id/roadmap` | Interactive level-by-level roadmap                       |
| `/exams/:id`             | Exam guide — structure, prep strategy, recommended books |
| `/books`                 | Book store with language filters                         |
| `/dashboard`             | User progress dashboard                                  |
| `/signup`                | Create account                                           |
| `/login`                 | Log in                                                   |

---

## Languages Supported

| Language    | Exam                       | Level System |
| ----------- | -------------------------- | ------------ |
| 🇪🇸 Spanish  | DELE, SIELE                | CEFR (A1–C2) |
| 🇫🇷 French   | DELF, DALF                 | CEFR (A1–C2) |
| 🇯🇵 Japanese | JLPT                       | N5–N1        |
| 🇩🇪 German   | Goethe-Zertifikat, TestDaF | CEFR (A1–C2) |
| 🇰🇷 Korean   | TOPIK I & II               | Level 1–6    |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Manas3432/polypath.git
cd polypath

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Environment Setup

This project uses Supabase for auth and database. Create a project at [supabase.com](https://supabase.com) and add your credentials to `src/lib/supabase.js`:

```js
const SUPABASE_URL = "your_project_url";
const SUPABASE_ANON_KEY = "your_anon_key";
```

### Database

Create a `user_progress` table in Supabase with the following columns:

| Column      | Type               |
| ----------- | ------------------ |
| id          | uuid (primary key) |
| user_id     | uuid               |
| language_id | text               |
| level_code  | text               |
| completed   | bool               |
| created_at  | timestamp          |

Enable RLS and add policies for SELECT, INSERT, and DELETE based on `auth.uid() = user_id`.

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── AnimatedPage.jsx
├── data/
│   ├── languages.js
│   ├── roadmaps.js
│   ├── exams.js
│   └── books.js
├── lib/
│   └── supabase.js
├── pages/
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── Books.jsx
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── SignUp.jsx
│   ├── dashboard/
│   │   └── Dashboard.jsx
│   ├── exam/
│   │   └── ExamGuide.jsx
│   └── language/
│       ├── LanguageOverview.jsx
│       └── Roadmap.jsx
├── store/
│   ├── authStore.js
│   └── progressStore.js
└── styles/
    └── globals.css
```

---

## Roadmap

- [x] Phase 1 — Static frontend, all pages, deployed on Vercel
- [x] Phase 2 — Supabase auth + user progress tracking
- [x] Phase 3 — Book store, user dashboard, animations
- [ ] Phase 4 — Mobile responsiveness
- [ ] Phase 5 — Search, more languages, Spring Boot backend migration

---

## Author

**Manas** — Final year EXTC Engineering student  
[GitHub](https://github.com/Manas3432)

---

## License

MIT
