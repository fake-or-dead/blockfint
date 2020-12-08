import React from "react"

class Homework2V2 extends React.Component {
  state = { 
    random: 0,
    list: [0, 0, 0, 0, 0, 0]
  }

  handleClicked = () => {
    let random = Math.floor(Math.random() * Math.floor(6)) + 1 ;
    this.setState({ random: random });
    this.setState(state => {
      const list = state.list.map((item, index) => {
        if(index === (random - 1)) {
          return item + 1;
        }
        else {
          return item;
        }
      });
      return {
        list,
      };
    }); 
  }

  render() {
    return(
      <div>
        <span>Homework 2 V.2</span>
        <button onClick={this.handleClicked}>click!</button>
        <span>Result: {this.state.random}</span>
        <table>
          <tr>
            {this.state.list.map((item, index) => (
              <td>{index + 1} : {item}</td>
            ))}
          </tr>  
        </table> 
      </div>
    );
  }
}

export default Homework2V2
