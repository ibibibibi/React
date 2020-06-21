import React from 'react';

class Menu extends React.Component {
    state = {
        color: "red",
    }
    
    changeColor = () => {
        this.setState({
            color: "yellow"
        })
    }

    render(){
        return(
            <h2 style={{color: this.state.color}} onClick={this.changeColor} >Menu</h2>
        )
    }
}

export default Menu;