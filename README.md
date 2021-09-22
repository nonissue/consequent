# Consequent

Next.js starter with Typescript & Tailwind.css (feat. `next-themes` for dark mode).

## Todo

- [ ] Fix paths in `tsconfig.json`
  - [ ] Just use relative imports?
- [ ] Cleanup `tailwind.config.js`
  - [ ] Remove prose customizations
  - [ ] Remove homemade radix plugin
- [ ] Only use `Inter` as custom font
  - [ ] Remove `Recursive`
  - [ ] Remove `Space Mono`
  - [ ] Remove `Space Grotesk`
  - [ ] Cleanup `tailwind` config
- [ ] Use `data/site.config.json` in `Header`
- [ ] Add `Husky`
- [ ] Add `zustand`

## Inspiration/Resources

### `eslint` config

- https://paulintrognon.fr/blog/post/typescript-prettier-eslint-next-js
- https://www.npmjs.com/package/eslint-config-nextjs
- https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest

### Inter Font Config

- See `src/styles/font.css`

```bash
# https://github.com/google/fonts/issues/2386#issuecomment-691503098
pyftsubset Inter.ttf \
  --unicodes="U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" \
  --layout-features="" \
  --flavor="woff2" \
  --output-file="Inter-subset.woff2"
```
