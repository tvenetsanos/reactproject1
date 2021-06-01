import React from 'react';
import SignUp from "../components/signUp.js"
import { Button } from "@material-ui/core"

const Header = () =>{
   return (
       <div className="header">
           <img class="size" src="https://1.bp.blogspot.com/-TS-FZ7WejCI/YLEcPS6SzjI/AAAAAAAAAjc/rz1avOEq6AglfyMk4TcBS3783GHPju1PQCLcBGAsYHQ/s320/puppylove.jpg"></img>
           <SignUp />
       </div>
   )
}

export default Header;   