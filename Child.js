import React from "react"
import SecondChild from "./SecondChild";
function Child(props){
    const {color,backcolor}=props;
    console.log("FIRST CHILD");
    console.log("color:",color);
    console.log("backgroundcolor:",backcolor);
    
    return(
        <div>
            <SecondChild color={color} backcolor={backcolor}/>
        </div>
    )
}
export default Child;