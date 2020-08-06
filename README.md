# Cube.js UI Kit

UI Kit for Cube.js website and other projects.

UI Kit is based on [Numl Design System](https://github.com/tenphi/numl) and injects it into the project.

To learn more about Numl+React integration read the [documentation](https://numl.design/guide/integration/react).

## Showcase

Showcase is a playground to see all the components in one place. Also it's used to present a design system solutions.

Install dependencies:

```bash
$ npm i
```

Add **CeraPro** font to the `src/assets/fonts` folder:

* `CeraPro-Regular.woff2`
* `CeraPro-Medium.woff2`

Run showcase:

```bash
$ npm start
```

## Integration

Install via npm:

```bash
npm install cubejs-uikit jsx-native-events --save-dev
```

### For Gatsby projects

Add the following code to the `gatsby-ssr.js` file:

```javascript
import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    if (process.env.BUILD_STAGE === `build-html`) {
        const css = `
*:not(:defined) { visibility: hidden; }
@font-face {
    font-family: "CeraPro";
    src: url(./assets/fonts/CeraPro-Regular.woff2);
    font-weight: 300;
}

@font-face {
    font-family: "CeraPro";
    src: url(./assets/fonts/CeraPro-Regular.woff2);
    font-weight: 400;
}

@font-face {
    font-family: "CeraPro";
    src: url(./assets/fonts/CeraPro-Medium.woff2);
    font-weight: 500;
}

@font-face {
    font-family: "CeraPro";
    src: url(./assets/fonts/CeraPro-Medium.woff2);
    font-weight: 600;
}

@font-face {
    font-family: "CeraPro";
    src: url(./assets/fonts/CeraPro-Medium.woff2);
    font-weight: 700;
}
`;

        setHeadComponents([<style>{css}</style>]);
    }
}
```

Where `./assets/fonts/CeraPro-Medium.woff2` is a public path to **CeraPro** font.

### For other projects

Include the following CSS in your application:

```css
*:not(:defined) { visibility: hidden; }
@font-face {
    font-family: "CeraPro";
    src: url(./assets/fonts/CeraPro-Regular.woff2);
    font-weight: 300;
}

@font-face {
    font-family: "CeraPro";
    src: url(./assets/fonts/CeraPro-Regular.woff2);
    font-weight: 400;
}

@font-face {
    font-family: "CeraPro";
    src: url(./assets/fonts/CeraPro-Medium.woff2);
    font-weight: 500;
}

@font-face {
    font-family: "CeraPro";
    src: url(./assets/fonts/CeraPro-Medium.woff2);
    font-weight: 600;
}

@font-face {
    font-family: "CeraPro";
    src: url(./assets/fonts/CeraPro-Medium.woff2);
    font-weight: 700;
}
```

Where `./assets/fonts/CeraPro-Medium.woff2` is your local (or public) path to **CeraPro** font.

## Usage

Import UI Kit to your React project:

```javascript
// index.js / gatsby-browser.js for Gatsby
import UIKit from 'cubejs-uikit';

UIKit.init();
```

Either you can pass options to the `init()` method or/and subscribe to it.

```javascript
UIKit.init({
  scheme: 'auto' // 'light' by default
}).then(() => {
  // UI Kit is initialized
});
```

Use simplified

Import UI Components to your application. It's required to use `Root` component to wrap your application.

```jsx
import Root from 'cubejs-uikit/dist/Root';
import Topbar from 'cubejs-uikit/dist/Topbar';

export default function App() {
  return <Root>
    <Topbar/>
    <nu-block>Other content</nu-block>
  </Root>;
}
```

## Available components

* **Root** - A root component to wrap your application with.
* **Section** - A section component.
* **Card** - A card component.
* **Grid** - A card component.

## Available blocks

* **Topbar** - A top bar component with a row of links.
* **Hero** - A card block component.
* **Footer** - A footer block component with copyright, links and "get in touch" section.
* **SubscriptionBlock** - A subscription block. A simple form to subscribe user to our updates.
* **CardBlock** - A card block.
* **FeatureBlock** - A block with feature list.
* **SmallSignUpCard** - A small signup card block with dark background.
* **BigSignUpCard** - A big signup card block with white background.
* **SwitchBlock** - A block with button group to switch sections each with text and image.

## Contribution

### Add new component/block

- Add a new file `{ComponentName}.jsx` in `src/components` folder with your component.
- Add a new line to `list.js` file in the root with component name.
- Add an example of usage to the **Showcase** component in `src/showcase/index.jsx`.
- Add a new line to the **Available components** section.
- Add a documentation `docs/${ComponentName}.md` file for the component. 

### Run showcase and test your work

```bash
$ npm start
```

Then navigate to `https://localhost:1234/` in your browser to open Showcase.

### Create pull request

Commit your work to the new branch and create pull request.
