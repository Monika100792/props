import React, {Component} from 'react';
class Demo extends Component {
    constructor() {
        super();
        this.state={name:"Dheeraj",Age:32}
        console.warn("This is constructor");

}
changestate=()=> {
this.setState({name:"Suresh",age:25})
}
render(){
    return(
        <>
        <br></br>
        <h1>Name of person:{this.state.name}<br></br>
        Age of person:{this.state.Age}</h1>
        </>
    )
}

}
export default Demo;