# Statussync.dev React Widget

Official React Widget for Statussync.dev

## Install

```shell
$ npm install @statussync.dev/react
$ pnpm add @statussync.dev/react
$ yarn add @statussync.dev/react
$ bun add @statussync.dev/react
```

## Usage

```jsx
import { StatussyncWidget } from "@statussync.dev/react";

export function Page() {
  return <StatussyncWidget slug="paystack" />;
}
```

Import css styles in to your app

```js
import "@statussync.dev/react/dist/styles.css";
```

Or

Extend in your tailwind config

```js
module.exports = {
  content: [
    "./app/**/*.{tsx,ts,mdx,md}",

    "./node_modules/@statussync.dev/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
