# Andre Kurniawan — Frontend Developer Portfolio

Modern, scalable, and performance-oriented personal portfolio built using **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **ShadCN UI**, and **Framer Motion**.

This project demonstrates advanced frontend engineering practices including component architecture, controlled modal systems, schema-based form validation, responsive UI design, animation orchestration, and clean state management.

---

## 🚀 Live Preview

> (Add your deployed URL here)
> Example: https://your-portfolio.vercel.app

---

## 🔎 Project Summary

This portfolio is designed as a production-ready frontend application rather than a static website.

It showcases:

- Component-based architecture
- Type-safe development with TypeScript
- Schema-driven form validation (Zod)
- Optimized animation patterns
- Controlled modal rendering using React Portals
- Responsive layout strategy (mobile-first)
- IntersectionObserver-based UI behavior
- Clean design system implementation

---

## 🚀 Tech Stack

**Frontend Framework**
- Next.js 14 (App Router)
- React 18
- TypeScript

**Styling**
- Tailwind CSS
- Custom Tailwind Theme Tokens
- Responsive Mobile-First Design

**UI & Components**
- ShadCN UI
- Lucide Icons

**Animations**
- Framer Motion
- AnimatePresence
- Viewport-based animation triggers

**Forms & Validation**
- React Hook Form
- Zod Schema Validation
- Custom Regex Email Validation

---

## 🏗 Architecture & Engineering Highlights

### 1️⃣ Component-Based Structure

Each section (Hero, Skills, FAQ, Contact, Footer) is modular and isolated, improving:

- Scalability
- Maintainability
- Reusability
- Separation of concerns

All components are structured for clean abstraction and minimal coupling.

---

## 🔧 Architecture & Implementation Details
### 2️⃣ Centralized Type Management

All TypeScript interfaces and types are centralized inside:

```sh
src/types/
```

This ensures:

- Consistent data contracts across components
- Easier refactoring
- Clean project organization
- Improved long-term scalability
- Stronger type safety across the application

### 3️⃣ Controlled Modal System (Advanced UI Pattern)

The modal system is implemented using:

```sh
createPortal

fixed inset-0 overlay pattern
```

- Body scroll locking via useEffect
- State-driven conditional rendering
- Framer Motion enter/exit transitions

Benefits :

- No route pollution
- Clean UI state control
- Better user experience
- Predictable rendering behavior
- Full control over animation lifecycle

### 4️⃣ Smart Navbar Behavior

The navbar dynamically adapts based on section visibility using:

```sh
IntersectionObserver
```
Why this approach?

- Avoids scroll event listeners
- Improves performance
- Reduces unnecessary re-renders
- Provides efficient section detection
- Enables dynamic theme switching (dark/light)

### 5️⃣ Form Architecture

The contact form is built using:

- React Hook Form (uncontrolled inputs for better performance)
- Zod schema validation
- Custom email regex validation
- Typed inference from schema
- Controlled success/failed modal states

Submission Flow Control
```sh
type Status = "form" | "success" | "failed";
```
This ensures:

- Predictable UI state transitions
- Clear separation between form and result states
- Controlled modal rendering logic

### 6️⃣ Animation Strategy
- Section Animations
- Viewport-based reveal animations
- Smooth opacity + translate transitions
- Micro Interactions
- Spring-based hover scaling
- Tap compression effects
- Smooth button feedback
- Modal Animations
- AnimatePresence
- Controlled mount/unmount transitions
- Scale + fade animation combination
- All animations are optimized to prevent layout thrashing and unnecessary reflows.

### 7️⃣ Responsive Design Implementation

The layout is implemented using a mobile-first strategy:

- Tailwind responsive breakpoints (lg: modifiers)
- Adaptive grid & flex layout switching
- Conditional component stacking
- Cross-device layout consistency
- Fully responsive across:
>-  Mobile <br>
>-  Tablet <br>
>-  Desktop

## 📂 Folder Structure
```sh
src/
│
├── app/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── navbar/
│   ├── hero/
│   ├── skills/
│   ├── faq/
│   ├── contact/
│   ├── footer/
│   └── ui/
│
├── types/
│
├── assets/
│
└── lib/
```
## ⚙️ Installation & Setup
- Clone Repository
- git clone https://github.com/your-username/portfolio.git
- cd portfolio
- Install Dependencies
- npm install
- Run Development Server
```sh
npm run dev
```
Open in browser:

http://localhost:3000
- Build Production Version
```sh
npm run build
npm start
```
## 🌍 Deployment

Optimized for:

Vercel (Recommended for Next.js projects)

Deployment Steps

- Push project to GitHub
- Import repository into Vercel
- Deploy
(No environment variables required)

## 📈 Performance Considerations

- No heavy UI frameworks
- IntersectionObserver instead of scroll listeners
- Minimal global state 
- Controlled re-renders
- Lightweight animation system
- Optimized SVG usage
- Modular component structure

## 🎯 Skills Demonstrated

- Advanced React Patterns
- Next.js App Router Architecture
- TypeScript Strict Mode Development
- Schema-Based Validation
- Responsive UI Engineering
- Local State Management
- Portal-Based Modal Rendering
- Performance-Oriented UI Design
- Animation Orchestration
- Clean Code & Scalable Folder Structure

## 👨‍💻 Author

## Andre Kurniawan - Frontend Developer

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile
