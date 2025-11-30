// Import Arow
import { $id } from "./arow.mjs";
// Import Components
import { zoom } from "./components/Zoom.mjs"

// Main App Element
const app = $id('app');

function pagesBtns() {
    let pages_btns = '';
    for (let i = 0; i < 9; i++) {
        pages_btns += `<button class="pageBtn" class="icon">${i + 1}</button>`
    }
    return pages_btns
}

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

// App Render Function
const appRender = () => app.innerHTML = appContainer();
// Initial Render 
appRender();