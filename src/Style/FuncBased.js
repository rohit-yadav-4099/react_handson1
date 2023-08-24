import "../Style.css"

function FuncBased(){
    return(
        <div className="Funcstyle">
            <h1>This is created using functional Component</h1>
            <p>This is done using external CSS</p>
            <p style={{color:"blue"}}>This is done using inline CSS</p>
        </div>
    )
}

export default FuncBased