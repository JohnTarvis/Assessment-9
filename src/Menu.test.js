import React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu";

it("renders without crashing", function(){
    render(<Menu menuItems={[{id:0,name:'',description:'',recipe:'',serve:''}]}/>);
});
