import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

//if want to let conpoent render itself we change the state
//state need to initialize
//state can only be updated using 'setState'
//constructor will only function as initia state
class App extends React.Component{

   
        state={lat: 40, errorMessage: ''};
         //will be a number but not know now
    

// all dataloading will be in componentididmount
    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            positon=>this.setState({lat: positon.coords.latitude}),
            
            err=>this.setState({errorMessage: err.message})

        );

       
    }
    // everytime a compoent is updated
    componentDidUpdate(){
        console.log('component was updated, it rerenderred')

    }

    renderContent(){
        if(this.state.errorMessage&&!this.state.lat){
            return <div>error: {this.state.errorMessage}</div>
        }
        if(this.state.lat &&!this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message='please accept location request'/>;
        
    }

// constructor will first called when new compoent created
//constructor is not only way to initiate state
//every compoent need a render
    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )

    
        
        
}
}
ReactDOM.render(<App />,document.querySelector('#root'));