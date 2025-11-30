# Chapter One > Frontend
## Step One 
1. Creating a HTML file named `index.html` for frontend and CSS file to styles folder named `style.css` for styling.
2. Add a new css file named `root.css` and import it in `style.css` file for better way to styling. 
**`root.css` File Like This :**
```css
:root {
    font-size: 16px;
    --xs: 0.5rem;
    --s: 0.75rem;
    --m: 1rem;
    --l: 1.5rem;
    --xl: 2rem;
    --xxl: 3rem;
    --dark-body-bg: #202020;
    --dark-body-fg: #fffafa;
    --prime: #FF3838;
    --prime0: #73AF6F;
    --prime1: #4169e1;
    --border-c: lightgray;
}
```
3. Add app element to `index.html` and add script tag (`app.js`).
4. Add `arow.mjs` for minimal using of javascript in main `app.js`.
6. Import app element from html with help of `arow.mjs`.
```js
// Import Arow
import { $id } from "./arow.mjs";

// Main App Element
const app = $id('app');
```

7. Create a 
```js
// App Container Function
function appContainer() {
    return (
        `
        `
    )
}

// App Render Function
const appRender = () => app.innerHTML = appContainer();
// Initial Render 
appRender();
```