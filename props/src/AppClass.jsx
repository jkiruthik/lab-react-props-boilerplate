import {Component} from "react";
import "./App.css"

export default class AppClass extends Component{
    render(){
        let data = this.props.imageprop;
        console.log(data)
        return(
            <div>
                <h1>Gallery</h1>
                <div className="img-div">
                {
                    data.map((element) =>{
                       return <img id="img" src={element.img} alt="" />
                    })
                }
                    
                </div>
            </div>
        )
    }
}
