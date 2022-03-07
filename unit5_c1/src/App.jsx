// import logo from './logo.svg';

// import {useState} from "react";

import './App.css';
import { Things } from "./components/Items"
function App() {
return (
  <>
  <Things name = "Books" add = "addBook" rem = "remBook" total = "totalBooks" value = {13} />
  <Things name = "Pens" add = "addPen" rem = "remPen" total = "totalPens" value = {10} />
  <Things name = "Notebooks " add = "addNotebooks" rem = "remNotebooks" total = "totalNotebooks" value = {44} />
  <Things name = "Pens" add = "addinkPens" rem = "remInkpen" total = "totalInkpens" value = {78} />

  </>
  );
}

export default App;
