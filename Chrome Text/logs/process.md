# Step One 
1. Creating a HTML file named `index.html` for frontend and CSS file to styles folder named `style.css` for styling.
2. Add a new css file named `root.css` and import it in `style.css` file for better way to styling. 
**`root.css` File Like This :**
```css
:root {
    font-size: 16px;
    --xs: 0.5rem;
    --s: 0.75rem;
    --m: 1rem;
    --x: 1.25rem;
    --l: 1.5rem;
    --xl: 2rem;
    --xxl: 3rem;
    --dark-body-bg: #202020;
    --dark-body-fg: #fffafa;
    --prime: #A1C349;
    --prime0: #73AF6F;
    --prime1: #4169e1;
    --border-c: gray;
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

7. Create a container function that help to display our app in app element with a app Render function.
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

8. Add Zoom component to app.
```js
export function zoom() {
  return `
    <div id="zoomBtns" class="tools">
      <button id="zoomInBtn"><i class="fa-solid fa-plus"></i></button>
      <button id="zoomOutBtn"><i class="fa-solid fa-minus"></i></button>
    </div>
  `;
}
```

```js
// App Container Function
function appContainer() {
    return (
        `
        <div id="toolbar" class="toolbar">
            ${zoom()}
            <div>
                <button class="icon"><i class="fa-solid fa-file-export"></i></button>
                <button class="icon"><i class="fa-solid fa-file-import"></i></button>
            </div>
        </div>
        <div id="sheet" contenteditable="true"></div>
        <div id="bottomToolbar" class="toolbar">
            <div id="pagesBtns">${pagesBtns()}</div>
        </div>
        `
    )
}
```

9. Add Pages Btns.
```js
function pagesBtns() {
    let pages_btns = '';
    for (let i = 0; i < 9; i++) {
        pages_btns += `<button class="pageBtn" class="icon">${i + 1}</button>`
    }
    return pages_btns
}
```

10. Add Demo export and import buttons.

# Step Two
