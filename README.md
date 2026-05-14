# where-to-live-ui

Web frontend for a cost-of-living city comparison tool. Pick a "home" city,
add one or more cities elsewhere in the world, and the app renders side-by-side
charts of rent, groceries, transport and other expense categories so you can
sanity-check a relocation decision.

This is the React/Redux UI. The Java/Spring backend that serves the
country, city and comparison endpoints lives at
[vaspoz/where-to-live](https://github.com/vaspoz/where-to-live).

## Status

Portfolio / learning project built in early 2020. Not actively maintained.
It is kept on GitHub as a representative example of a small full-stack app
(React SPA + JVM backend + JWT auth + Jenkins pipeline) rather than as a
product. Dependencies are pinned to their 2020 versions; expect audit
warnings on a fresh `npm install`.

<!-- screenshot placeholder: drop a screenshot of the comparison chart page here when convenient -->

## What it does

- Pick a base country and base city ("where I live now")
- Pick one or more target countries to compare against
- Backend returns normalised cost-of-living indices per category
- UI renders comparison charts (Chart.js via react-chartjs-2)
- Country flags resolved via the public restcountries API
- Sign-up / login flow with JWT stored in `localStorage`
- Small admin portal (user count, log tail) gated to a single admin user

## Tech stack

- React 16 + Redux + redux-thunk
- React Router 5 with animated route transitions
- Material-UI 4 for components, custom CSS for layout
- Chart.js 2 / react-chartjs-2 for the comparison visualisations
- `isomorphic-fetch` + a small fetch wrapper that injects the JWT header
- Webpack 1 + Babel 6 build, Mocha + Enzyme tests, ESLint
- Jenkins pipeline (see `Jenkinsfile`) for the original CI/CD setup

Backend dependency: [vaspoz/where-to-live](https://github.com/vaspoz/where-to-live)
(Java / Spring Boot) — must be running on `http://localhost:8080` for the
dev build to work. The production build was wired to a separate host.

## Run locally

Prerequisites: Node.js. The project predates Node 16, so Node 10–12 is
the safest match for the Webpack 1 / Babel 6 toolchain.

```
npm install
npm start
```

`npm start` runs the webpack dev server, the lint watcher and the test
watcher in parallel.

The backend base URL is hard-coded per environment in:

- `webpack.config.dev.js` — `http://localhost:8080`
- `webpack.config.prod.js` — production host

Start the [where-to-live](https://github.com/vaspoz/where-to-live) backend
before the UI, otherwise the country/city dropdowns will be empty.

## Scripts

- `npm start` — dev server + lint:watch + test:watch
- `npm test` — Mocha + Enzyme one-shot
- `npm run lint` — ESLint over `webpack.config.*`, `src/`, `tools/`
- `npm run build` — production bundle into `dist/`

## Layout

```
src/
  index.js              entry point, mounts <App/>
  components/
    AppRoutes.js        react-router route table
    ajax/api.js         all backend calls, JWT injection
    global.js           endpoint URLs, role constants
    base_data/          "where do you live now" form
    compareTo_data/     "compare with" form
    comparison_chart/   chart pages
    login_page/, signup/, admin_portal/, about/
    redux/              actions + reducers
```

## License

MIT. Author: Basil (Vasilii) Pozdeev.
