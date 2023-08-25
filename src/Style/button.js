import React, {useState, Component} from 'react'
import FuncBased from './FuncBased'
import ClassFunc from './ClassBased'


function Buttonone(){
    const [count, setCount] = useState(false)
    console.log(count)
    return(
        <div className='btn1'>
            <h1>{count}</h1>
            <button onClick={() => setCount(!count)} className='btn1'>To see Styling in functional component</button>
            {count ? <FuncBased></FuncBased>: null}
        </div>
    )
}
export default Buttonone

class Buttontwo extends Component {
    constructor(){
        super();
        this.state = {
            buttonValue: true,
        };
        console.log(this.state.buttonValue);
    }
    render(){
        return(
            <div className=''>
                <button onClick={() => this.setState({buttonValue: !this.state.buttonValue})} className='btn2'>To see styling in class component</button>
                {this.state.buttonValue ? null : <ClassFunc />}
            </div>
        )
    }
}
export {Buttontwo}
