import React from "react"
import ThirdChild from "./ThirdChild";
function SecondChild(props){
    const {color,backcolor}=props;
    console.log("SECOND CHILD");
    console.log("color:",color);
    console.log("backgroundcolor:",backcolor);
    return(
        <div>
            <ThirdChild color={color} backcolor={backcolor}/>
        </div>
    )

}
export default SecondChild;