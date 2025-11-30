// Import Arow
import { $id } from "./arow.mjs";

// Main App Element
const app = $id('app');

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