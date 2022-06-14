import { Component } from "react";

class rvLAB extends Component {
    constructor(props) {
        super(props)

        this.state ={
            number: 0
        }
    }
    render() {
        return(
            <div>
                <h1>gia tri: {this.state.number}</h1>
            </div>
        )
    }
}
export default rvLAB;