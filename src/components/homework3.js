import React from "react"

// รางวัลที่ 1 คือ 244083
// รางวัลข้างเคียงรางวัลที่ 1 คือ 244082, 244084
// รางวัลเลขหน้า 3 ตัว คือ 127, 220
// รางวัลเลขท้าย 3 ตัว คือ 623, 853
// รางวัลเลขท้าย 2 ตัวคือ 57

class Homework3 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      firstPrize: "244083",
      front3Prize: ["127", "220"],
      last3Prize: ["623", "853"],
      last2Prize: "57",
      result: "",
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleClicked.bind(this);
  }

  wonFirstPrize = (lottery) => {
    let regex = new RegExp(this.state.firstPrize);
    if(regex.test(lottery)) {
      return "ถูกรางวัลที่ 1";
    }
    else {
      return "";
    }
  };

  wonCloseFirstPrize = (lottery) => {
    let lowerClose = ((parseInt(this.state.firstPrize) - 1) % 1000000).toString().padStart(6, "0");
    let upperClose = ((parseInt(this.state.firstPrize) + 1) % 1000000).toString().padStart(6, "0");
    let regex = new RegExp(lowerClose + '|' +upperClose);
    
    if(regex.test(lottery)) {
      return "ถูกรางวัลข้างเคียงรางวัลที่ 1";
    }
    else {
      return "";
    }
  };

  wonFront3Prize = (lottery) => {
    let regex = new RegExp('(' + this.state.front3Prize.join('|') + ')\\d{3}');
    if(regex.test(lottery)) {
      return "ถูกรางวัลเลขหน้า 3 ตัว";
    }
    else {
      return "";
    }
  };

  wonLast3Prize = (lottery) => {
    let regex = new RegExp('\\d{3}(' + this.state.last3Prize.join('|') + ')');
    if(regex.test(lottery)) {
      return "ถูกรางวัลเลขท้าย 3 ตัว";
    }
    else {
      return "";
    }
  };

  wonLast2Prize = (lottery) => {
    let regex = new RegExp('\\d{4}' + this.state.last2Prize );
    if(regex.test(lottery)) {
      return "ถูกรางวัลเลขท้าย 2 ตัว";
    }
    else {
      return "";
    }
  };

  handleClicked = () => {
    let lottery = this.state.value;
    let check_result = "";
    check_result += this.wonFirstPrize(lottery)
    check_result += this.wonCloseFirstPrize(lottery)
    check_result += this.wonFront3Prize(lottery)
    check_result += this.wonLast3Prize(lottery)
    check_result += this.wonLast2Prize(lottery)
    
    if(check_result === "") {
      check_result = "ท่านไม่ถูกรางวัล";
    }
    
    this.setState({result: check_result});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(
      <div>
        <span>Homework 3 </span>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClicked}>ตรวจรางวัล</button>
        <span>{this.state.result}</span>
      </div>
    );
  }
}

export default Homework3
