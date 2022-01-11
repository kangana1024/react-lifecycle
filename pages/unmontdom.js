import { Component } from "react";

export default class App extends Component {
  state = {
    w: 0,
    h: 0,
  }
  componentDidMount() {
    if (window) {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.handleResize)
    }
  }

  handleResize = () => {
    if (window) {
      this.setState({
        w: window.innerWidth,
        h: window.innerHeight
      })
    }
  }

  render() {
    return ( <div style = {
        {
          width: '100%',
          textAlign: 'center'
        }
      } >
      <p> Width: { this.state.w } </p> 
			<p> Height: { this.state.h } </p> 
			</div >
    )
  }
}