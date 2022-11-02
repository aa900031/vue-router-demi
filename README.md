# Vue Router Demi

Creates Universal Library for Vue Router 3 & 4

## Strategies

- `3.6`: exports from `vue-router/composables` (Composition API is built-in).
- `>=3.0`: exports from `vue-router`.

## Usage

Install this as your plugin's dependency:

```bash
npm i vue-router-demi
# or
yarn add vue-router-demi
# or
pnpm i vue-router-demi
```

Add `vue-router` to your plugin's peer dependencies

```json
{
  "peerDependencies": {
    "vue-router": "^3.6.0 || >=4.0.0"
  }
}
```

Import everything related to VueRouter from it, it will redirect to `vue-router@3.6/composables` or `vue-router@4` based on users' environments.

```ts
import { useRoute, useRouter, useLink } from 'vue-router-demi'
```

Publish your plugin and all is done!

> When using with [Vite](https://vitejs.dev), you will need to opt-out the pre-bundling to get `vue-router-demi` work properly by
> ```js
> // vite.config.js
> export default defineConfig({
>   optimizeDeps: {
>     exclude: ['vue-router-demi']
>  }
> })
> ```


## Extra APIs

### `isVueRouter3` `isVueRouter4`

```ts
import { isVueRouter3, isVueRouter4 } from 'vue-router-demi'

if (isVueRouter3) {
  // VueRouter 3 only
} else {
  // VueRouter 4 only
}
```

## CLI

### Manually Switch Versions

To explicitly switch the redirecting version, you can use these commands in your project's root.

```bash
npx vue-router-demi-switch 3.6
# or
npx vue-router-demi-switch 4
```

### Package Aliasing

If you would like to import `vue-router` under an alias, you can use the following command

```bash
npx vue-router-demi-switch 3.6 vue-router3
# or
npx vue-router-demi-switch 4 vue-router4
```

### Auto Fix

If the `postinstall` hook doesn't get triggered or you have updated the VueRouter version, try to run the following command to resolve the redirecting.

```bash
npx vue-router-demi-fix
```

### Isomorphic Testings

You can support testing for both versions by adding npm alias in your dev dependencies. For example:

```json
{
  "scripts": {
    "test:3": "vue-router-demi-switch 3.6 vue-router3 && vitest",
    "test:4": "vue-router-demi-switch 4 && vitest",
  },
  "devDependencies": {
    "vue-router": "^4.1.6",
    "vue-router3": "npm:vue-router@3.6.5"
  },
}
```

or

```json
{
  "scripts": {
    "test:3": "vue-demi-switch 3.6 && vitest",
    "test:4": "vue-demi-switch 4 vue-router4 && vitest",
  },
  "devDependencies": {
    "vue-router": "^3.6.5",
    "vue-router4": "npm:vue-router@4.1.6"
  },
}
```

## Examples

See [examples](./examples).
