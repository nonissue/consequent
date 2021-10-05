# Consequent

Next.js starter with Typescript & Tailwind.css (feat. `next-themes` for dark mode).

## Tasks

### Misc

- [ ] Add docs
  - [ ] Features
    - [ ] TS
    - [ ] ESLint
    - [ ] Husky
    - [ ] Themes
    - [ ] `getLayout`
  - [ ] Set up
  - [ ] Usage
- [ ] Add `react-error-boundary`
  - [ ] https://github.com/lightsound/nexst-tailwind/tree/main/src/layout
- [x] Update `index`
- [x] Add docs route
- [ ] Add favicon, opengraph metadata, etc.
- [x] Remove `providers` component
- [ ] Add `Husky`
  - [ ] Add package
  - [ ] Add pre-commit
  - [ ] Add post-merge
- [ ] Add `zustand`
  - [ ] Add package
  - [ ] Remove custom `context` implementation currently being used
- [ ] Cleanup `eslint` config
- [ ] Figure out color preview for radix-colors
- [x] Fix paths in `tsconfig.json`
  - Just use relative imports?
- [x] ~~Use `data/site.config.json` in `Header`~~
  - [x] Removed altogether
- [x] Cleanup `tailwind.config.js`
  - [x] ~~Remove prose customizations~~
    - Eh, I like the prose customizations.
    - Though if I use radix-colors plugin, it automatically changes color variant between light/dark
  - [x] Remove homemade radix plugin
- [x] use only `Inter` as custom font
  - [x] Remove `Recursive`
  - [x] Remove `Space Mono`
  - [x] Remove `Space Grotesk`
  - [x] Cleanup `tailwind` config
- [x] Figure out which `postcss` plugins are actually needed
- [x] Remove unneeded `postcss` plugins
- [x] Remove `@babel/core`
- [x] Remove `tailwind-typography`
  - [x] Remove plugin
  - [x] Remove customization in `tailwind.config.js`
  - [x] Really shouldn't be customizing styling in tailwind config, it would be easier just to do it from scratch

## Inspiration/Resources

### Tailwind Typography: Dark Mode

- https://sergiodxa.com/articles/use-tailwindcss-typography-with-dark-mode-styles
- Reference custom fontFamily:
  - https://github.com/tailwindlabs/tailwindcss-typography/issues/14

### `eslint` config

- https://paulintrognon.fr/blog/post/typescript-prettier-eslint-next-js
- https://www.npmjs.com/package/eslint-config-nextjs
- https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest

### Inter Font Config

- See `src/styles/font.css`.
- https://github.com/google/fonts/issues/2386#issuecomment-691503098

```bash
# pyftsubset has to be installed
pyftsubset Inter.ttf \
  --unicodes="U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" \
  --layout-features="" \
  --flavor="woff2" \
  --output-file="Inter-subset.woff2"
```
