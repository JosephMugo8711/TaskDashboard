import { Suspense } from 'react' // Lazy loading in react
import { BrowserRouter } from 'react-router-dom' // ROuting
import { StyleSheetManager } from 'styled-components' // Manage styles in styled components
import ReactDOM from 'react-dom/client' 
import App from './App.tsx'
import './index.css'

// REnder app component into the root element in the dom
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Using suspense to provide a fallback component while components are loading asynchronously
  <Suspense fallback={<div>Loading...</div>}>
    {/* Provide routing functionality to your app */}
     <BrowserRouter> 
     {/* Using stylesheetmanager from styled-components to manage styles */}
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
            <App />
        </StyleSheetManager>
     </BrowserRouter>
  </Suspense>
   

)





// React.StrictMode

// React's StrictMode is sort of a helper component that will help you write better react components, you can wrap a set of components with <StrictMode /> and it'll basically:

// Verify that the components inside are following some of the recommended practices and warn you if not in the console.
// Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
// Help you prevent some side effects by identifying potential risks.
// As the documentation says, strict mode is development oriented so you don't need to worry about it impacting on your production build.

// I've found it especially useful to implement strict mode when I'm working on new code bases and I want to see what kind of code/components I'm facing. Also if you're on bug hunting mode, sometimes it's a good idea to wrap with <StrictMode /> the components/blocks of code you think might be the source of the problem.

// So yeah, you're in the correct path to understanding strict mode, keep it up, I think it's one of those things you understand better when you play with them, so go ahead and have some fun.
