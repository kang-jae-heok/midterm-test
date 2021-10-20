import React  from "react";

export default class Example extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: " ",
        }
    }
    changeText = ()=>{
        this.setState({
            text:"사과"
        })
    }
    changeText2 = ()=>{
        this.setState({
            text:"오랜지"
        })
    }
    changeText3 = ()=>{
        this.setState({
            text:"바나나"
        })
    }
    render(){
       
        return(<div>
            <h1>어떤 과일을 좋아하시나요?{this.state.text}</h1>
            <button onClick={this.changeText}>사과</button>
            <button onClick={this.changeText2}>오렌지</button>
            <button onClick={this.changeText3}>바나나</button>
        </div>)
    }
}