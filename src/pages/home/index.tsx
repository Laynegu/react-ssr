import React, { MouseEvent, ReactNode } from "react";

interface Props {
  Content: ReactNode
}

interface State {
  num: number
}

class App extends React.Component<Props, State> {
  readonly state: Readonly<State> = {
    num: 0
  }

  private handleClick = (e: MouseEvent<HTMLElement>) => {
    // console.log(e);
    const { opera } = e.currentTarget.dataset;
    let num = this.state.num;
    if (opera === "+") {
      num++;
    } else if (opera === '-') {
      num--;
    }
    this.setState({ num });
  }

  render() {
    const { num } = this.state;
    const { Content } = this.props;
    return (
      <div>
        <h1>hello laynegu!!!</h1>
        <a href="/login">跳转login</a>
        <br />
        {Content}
        <br />
        <button onClick={this.handleClick} data-opera="+">add</button>
        {num}
        <button onClick={this.handleClick} data-opera="-">sub</button>
      </div>
    )
  }
}

export default App;
