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

Run showcase:

```bash
$ npm start
```

## Integration

Install via npm:

```bash
npm install cubejs-uikit jsx-native-events --save-dev
```

## Usage

Import UI Kit to your React project:

```javascript
// index.js
import 'cubejs-uikit';
```

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
* **Topbar** - A top bar component with a row of links.
* **Footer** - A footer component with copyright, links and "get in touch" section.
* **SchemeSwitch** - A switch button for schemes. (light/dark)

## Contribution

To add a new component:

- Add a new file `{ComponentName}.jsx` in `src/components` folder with your component.
- Add a new line to `list.js` file in the root with component name.
- Add an example of usage to the **Showcase** component in `src/showcase/index.jsx`.
- Add a new line to the **Available components** section.
- Add a documentation `docs/${ComponentName}.md` file for the component. 
