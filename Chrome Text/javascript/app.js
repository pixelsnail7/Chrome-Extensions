// Import Arow
import { $id, useMemory } from "./arow.mjs";
// Import Components
import { zoom } from "./components/Zoom.mjs"
import { messageBox } from "./components/MessageBox.mjs";

// Main App Element
const app = $id('app');

function pagesBtns() {
    let pages_btns = '';
    for (let i = 0; i < 9; i++) {
        pages_btns += `<button class="pageBtn icon">${i + 1}</button>`
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


// Logic
// Elements 
const zoomInBtn = $id('zoomInBtn');
const zoomOutBtn = $id('zoomOutBtn');
const sheet = $id('sheet');
const pageBtns = document.querySelectorAll('.pageBtn');



// Zoom Functionality
const [getZoomValue, setZoomValue] = useMemory('zoomValue');
// Set initial zoom size from saved value
sheet.style.fontSize = getZoomValue() + 'rem';

// Zoom In Functionality
zoomInBtn.addEventListener('click', () => {
    let current = Number(getZoomValue());
    if (current < 3) {
        let newValue = current + 0.5;
        setZoomValue(newValue);
        sheet.style.fontSize = newValue + 'rem';
    }
    else if (current == 3) {
        messageBox('Zoom limit reached');
    }
});

// Zoom Out Functionality
zoomOutBtn.addEventListener('click', () => {
    let current = Number(getZoomValue());
    if (current > 1) {
        let newValue = current - 0.5;
        setZoomValue(newValue);
        sheet.style.fontSize = newValue + 'rem';
    }
    else if (current == 1) {
        messageBox('Zoom limit reached');
    }
});

// Pages Button Functionality
// Current Page Functionality
const [getCurrentPage, setCurrentPage] = useMemory('currentPage');
// Store current page number
if (!getCurrentPage()) {
    setCurrentPage(0);
}


const [getData, setData] = useMemory('data');
// Store array properly
if (!getData()) {
    setData(JSON.stringify(["1","2","3","4","5","6","7","8","9"]));
}
// Read and parse array
let data = JSON.parse(getData());
// Set initial page
sheet.innerHTML = data[getCurrentPage()];

pageBtns.forEach(pageBtn => {
    pageBtn.addEventListener('click', () => {
        sheet.innerHTML = data[Number(pageBtn.textContent) - 1];
        setCurrentPage(Number(pageBtn.textContent) - 1);
        console.log(getCurrentPage());
    })
});

// Save data on typing
sheet.addEventListener('input', () => {
    let newData = JSON.parse(getData());
    newData[getCurrentPage()] = sheet.textContent;
    setData(JSON.stringify(newData));
})

// Add and Remove Active Class
pageBtns.forEach((pageBtn, index) => {

    // Add active class
    if (index == getCurrentPage()) {
        pageBtn.classList.add('activeIcon');
    }

    pageBtn.addEventListener('click', () => {
        pageBtns.forEach(pageBtn => pageBtn.classList.remove('activeIcon'));
        pageBtn.classList.add('activeIcon');
    })
});