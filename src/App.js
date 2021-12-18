import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import "./App.css";
import "./styles/App.css";

import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

import NewItemForm from "./NewItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [menuItems, setMenuItems] = useState([]);
  const [drinkItems, setDrinkItems] = useState([]);
  const [snackItems, setSnackItems] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
        let snacks = await SnackOrBoozeApi.getSnacks();
        let drinks = await SnackOrBoozeApi.getDrinks();
        setDrinkItems(drinks);
        setSnackItems(snacks);
        setIsLoading(false);
    }
    getMenuItems();
  }, []);

  async function addItem(data){
    await SnackOrBoozeApi.addMenuItem(data);
    let snacks = await SnackOrBoozeApi.getSnacks();
    let drinks = await SnackOrBoozeApi.getDrinks();
    setDrinkItems(drinks);
    setSnackItems(snacks);
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home  />
            </Route>

            <Route exact path="/snacks">
              <Menu menuItems={snackItems} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem menuItems={snackItems} cantFind="/snacks" />
            </Route>

            <Route exact path="/drinks">
              <Menu menuItems={drinkItems} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <MenuItem menuItems={drinkItems} cantFind="/drinks" />
            </Route>

            <Route path="/add">
              <NewItemForm addItem={addItem}/>
            </Route>

            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
