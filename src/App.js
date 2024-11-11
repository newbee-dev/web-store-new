import "./App.css";
// import Routes and Route to enable navigation
import { Routes, Route } from "react-router-dom";
// import container components to be displayed on all urls
import Header from "./header/Header.js";
// import container components to be displayed with Routes
import Landing from "./pages/Landing";
import ShoppingCart from "./pages/ShoppingCart";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Shipping from "./pages/Shipping";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/cart" element={<ShoppingCart />} />
        <Route exact path="/products" element={<ProductPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/RegistrationPage" element={<RegistrationPage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />

        <Route exact path="/shipping" element={<Shipping />} />
      </Routes>
    </div>
  );
}

export default App;

// Project set up and initialisation:
// So far I have...

// 1. initialised npm, installed lodash and created a react app

// 2. installations:

// react test renderer
// react-router-dom (Handles routing and navigation)
// reduxjs/toolkit react-redux ( Manages global state)
// Formik (Simplifies form handling and validation)
// yup (schema-based validation library for formik)
//react-bootstrap bootstrap
// bootstrap@5.3.3

// // imported "bootstrap/dist/css/bootstrap.css"; in index.js

// 3. I created a git account and initialised a git repository

// 4.  I Set up redux:

// 4.1 created reducers and store
// (import slice of state into store[to be created in step 4.3 and serves to change state])

// 4.2 Imported store and provider in index and wrapped app with provider, passed store as props

// 4.3 Created REDUX REDUCER (where state and reducers[ACTIONS] are defined ) by creating slice of state:

// 4.4 create the component that will allow us to trigger these reducer functions and also displays the state value
// for example: like the heading property on the UI.

// ! REMEMBER: if a component needs to DISPLAY data from the store, use the useSelector hook to access it (read only)
// If a component needs to trigger actions to update the store, use the useDispatch hook. (changes state: buttons etc)

//created a user friendly file structure
// Key points that contribute to the strength of my structure:

// Clear separation of concerns: Components, forms, pages, and Redux logic are organized into distinct folders.
// Reusability: Reusable components like buttons, input fields, and the navbar are placed in the components folder.
// Maintainability: This modular approach makes it easier to update and modify specific parts of my application.
// Scalability: As my project grows, I can easily add new components and features without disrupting the overall structure.

// created  basic pages/components, Focused on NaviGate and log in /log out functionality

// imported BrowserRouter and included BrowserRouter wrapper around App in index.js
//  Have imported { Routes, Route } from "react-router-dom"; in App.js
//  Wrapped routes around container components and router per c.component to exaxt routes in App.js
// I have added and committed components, pages and redux stuff to Git (must still work on and add forms css packagejson etc) going to add and commit app.js
// added About component stuff and css styles added and committed via git
// added imports to Register.js added and committed via git
// added validation schema to Register.js and added and committed via git
// Formik form and inputs etc added and committed to Register.js
// css styles for Register and corrected file path added and committed
// boilerplate container component and imports added to Login.js added and committed
// added and committed changes in RegistrationPage.js
// added formik login form to be rendered, added and committed
// imported Login.js into LoginPage.js added and committed
//  added landing imports initialised functionality and handleClick. added and committed
// added return div content in Landing.js and css classNames and logic to check if the user is logged in or out. Added and committed.
// added Landing.js styles and included styles for other components there. added and committed.
// Added imports for ProductPage.js. added and committed
// Added Products array of objects to ProductPage.js. added and committed.
// Initialised useDispatch and add to handleClick function. Added and committed
// Added css styles for ProductPage.css
// Added container, columns rows cards, map function, mapping item k.v pairs to ProductPage.js. added and committed.
// added and committed ProductPage.css
//  added function, child component imports to ShoppingCart.js. added and committed.
// Added list of mapped items and totalprice and buttons. added and committed.
// imported Shipping.js and added route to Shipping.js to App.js. Added and committed.
