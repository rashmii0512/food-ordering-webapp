# Food Ordering Webapp 

 * Header
 *    -logo
 *    -Nav Items
 * Body
 *    -Search
 *    -Restaurant container
 *       -Restaurant card
 * Footer
 *    -Copyright
 *    -links
 *    -adress
 *    -COntact


 Two types of Exports/Imports
 - Default export/import 
   export default component;
   import component from "path";

-Named Export/Import
  -export const Componet;
  - import {Component} from "path";


always keep your components small
try to have less than 100 lines of code for each component


# React Hooks
- useState()
- useEffect()


# 2 types of routing:
- client side routing
- server side routing

# Redux toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build out store
 - Connect our store to app
 - Create slice ( cartSlice)
 - Dispatch(action)
 - Selector
 

# Types of testing(for developers)
- unit testing
- Integration testing
- End to End (e2e) testing

# Setting up Testing in our app
- Install React Testing library
- Install jest
- Install babel dependencies
- Configure babel
- Configure Parcel Config file to disable default babel transpilation
- jest configuration : npx jest --init , need typescript : no , jsdom, y, babel, y
- install jsdom library
- install @babel/preset-react to make jsx work in test cases
- include babel present inside the babel config
- Install npm i -D @testing-library/jest-dom