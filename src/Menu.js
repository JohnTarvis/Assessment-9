import React from "react";
import { Link, Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./styles/Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ menuItems,title }) {


/*


<Router>
  <ListGroup>
    {menuItems.map(menuItem => (
      <Link to={`/${title}/${menuItem.id}`} key={menuItem.id}>
        <switch>
          <ListGroupItem>{menuItem.name}</ListGroupItem>
        </switch>
      </Link>
    ))}
  </ListGroup>
</Router>


<ListGroup>
  {menuItems.map(menuItem => (
    <Link to={`/${title}/${menuItem.id}`} key={menuItem.id}>
      <ListGroupItem>{menuItem.name}</ListGroupItem>
    </Link>
  ))}
</ListGroup>


*/




  return (
    <section className="col-md-4">

      <Card>
          <CardBody>
              <CardTitle className="font-weight-bold text-center">
                  {title}
              </CardTitle>
              <CardText>
                  {title === "Snacks" ? `Snacks to satisfy those mid day munchies:` : 
                  `Drinks to wash away the day:`}
              </CardText>


              <ListGroup>
                  {menuItems.map(menuItem => (
                      <Link to={`/${title}/${menuItem.id}`} key={menuItem.id}>
                          <ListGroupItem>{menuItem.name}</ListGroupItem>
                      </Link>
                  ))}



              </ListGroup>








          </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
