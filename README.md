# Prasanna Pure Veg — Premium Restaurant Website

A premium, responsive React + Vite website for **Prasanna Pure Veg, Pashan, Pune**.

## What's included

- Premium mobile-first UI with warm cream / turmeric / charcoal visual system
- Sticky header that remains readable on every page and changes from transparent to solid on scroll
- Scroll reveal animations, hover lift/tilt, modal transitions and reduced-motion support
- Home, Menu, About Us and Visit Us pages
- Food/Beverages menu tabs, menu search and category jump navigation
- Real Google Maps embed on Visit Us page
- Mobile sticky Call / Order Online bar
- Sign in + Sign up screens
- Google "Continue with Google" authentication
- Email/password authentication
- Authentication gate before Zomato, Swiggy and Order Online links
- Auth gate remembers the requested external destination and opens it after successful login
- User account chip + sign-out action in the header
- Supplied restaurant photography stored locally in `public/images`
- SEO metadata and accessible focus states

## Technology

- React 18
- Vite
- React Router
- Firebase Authentication
- Lucide React
- CSS

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Open the Vite URL, normally `http://localhost:5173`.

## Production

```bash
npm run build
npm run preview
```

## Firebase Authentication setup

The authentication UI is already wired to Firebase, but the Firebase project credentials are intentionally not included in source control.

### 1. Create a Firebase project

Open Firebase Console and create/select a project.

### 2. Create a Web App

In Firebase Console:

`Project settings → Your apps → Add app → Web`

Copy the web configuration values.

### 3. Enable authentication providers

Go to:

`Authentication → Sign-in method`

Enable:

- Google
- Email/Password

For Google sign-in, configure the authorized domain(s) used by the deployed website.

### 4. Create `.env.local`

Copy `.env.example` to `.env.local` and replace the placeholders:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Restart the Vite server after changing environment variables.

### 5. Test

Open `/signup` and test:

- Create account with email/password
- Continue with Google
- Sign in
- Sign out
- Click Zomato / Swiggy / Order Online while signed out and verify the login modal appears
- Sign in from the modal and verify the requested external destination opens

## Authentication flow

```text
User clicks Order Online / Zomato / Swiggy
                    ↓
              Is user signed in?
              ↙              ↘
            YES               NO
             ↓                 ↓
       Open destination    Login modal
                              ↓
                    Sign in / Sign up / Google
                              ↓
                       Return to destination
```

## Important restaurant-data notes

- Menu prices are intentionally omitted from the website.
- The supplied `Menu.pdf` is an 11-page image-based menu, so the menu structure was transcribed from the supplied pages rather than relying on machine-parsed text.
- The supplied menu covers food only. The Beverages tab therefore says that the full beverage menu is available in-restaurant instead of inventing drinks.
- The printed menu contains omelette-style item names while the restaurant is positioned as pure vegetarian. The site keeps those supplied names without making an unsupported ingredient claim.
- The supplied brief did not contain a concrete Google Order Online URL, so `restaurant.orderOnline` currently uses the supplied Zomato destination. Replace that single value in `src/data.js` when the restaurant's Google order URL is available.

## Main files

```text
src/
├── components/
│   ├── AuthGate.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── MobileBar.jsx
│   ├── ProtectedLink.jsx
│   └── Reveal.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── About.jsx
│   ├── Auth.jsx
│   ├── Home.jsx
│   ├── MenuPage.jsx
│   └── Visit.jsx
├── App.jsx
├── data.js
├── firebase.js
├── main.jsx
└── styles.css
```
