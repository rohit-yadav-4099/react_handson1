import "../Style.css"
import { Component } from "react"

class ClassFunc extends Component{
    render(){
        return(
            <div className="classfunc">
                <h1>This is Created using Class component</h1>
                <p>This is done using external CSS</p>
            <p style={{color:"blue"}}>This is done using inline CSS</p>
            </div>
        )
    }
}
export default ClassFunc;