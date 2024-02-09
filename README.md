# Statussync React Widget

Official React Widget for Statussync.dev

## Install

```shell
$ npm install @statussync/react
$ pnpm add @statussync/react
$ yarn add @statussync/react
$ bun add @statussync/react
```

## Usage

```jsx
import { StatussyncWidget } from "@statussync/react";

export function Page() {
  return <StatussyncWidget slug="paystack" />;
}
```

Import css styles in to your app

```js
import "@statussync/react/dist/styles.css";
```

Or

Extend in your tailwind config

```js
module.exports = {
  content: [
    "./app/**/*.{tsx,ts,mdx,md}",

    "./node_modules/@statussync/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
