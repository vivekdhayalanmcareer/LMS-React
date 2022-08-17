// function MakeCertificate(){
//     return (
//         <div>Make Certificate

// <canvas id="stockGraph" style={{backgroundColor:'red'}} width="150" height="150">
//   current stock price: $3.15 + 0.15
// </canvas>
//         </div>
//     )
// }
// export default MakeCertificate;

import React from "react";

class MakeCertificate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Vivek Dhayalan M',
            date: new Date(),
        }
    }

    render(){
        console.log('render')
        const {name,date} = this.state;
        return (
            <div>
                <p>Make Certificate</p>
                <p>{name}</p>
                <p>{date.toLocaleTimeString()}</p>
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.timerID = setInterval(()=>this.tick(),1000);
        //this.setState({name:'Vivek 2'})
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({date:new Date()})
    }

}

export default MakeCertificate