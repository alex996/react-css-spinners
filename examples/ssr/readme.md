# SSR Example

Minimal demo of the spinners with server-side rendering (CJS bundle) and client-side hydration (ESM bundle).

```sh
# Install the deps
npm i

# Start dev server
npm run dev

# Build prod bundle
npm run build

# Start prod server
npm start
```

# Notes

If you decide to use this template, then don't forget to

- implement live/HMR reload in dev (currently missing)
- minify CSS assets in production
- configure `contenthash` for client-side `.js` and `.css`
