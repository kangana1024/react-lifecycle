// HOC
import { Component } from 'react'
export function withShowAlert(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return class extends Component {
    state = {
      name: "Dev"
    }
    showAlert = () => {
      alert("Alert")
      this.setState({
        name: "Dog"
      })
    }
    handleChange = (name) => () => {
      this.setState({
        name: "hello: " + name
      })
    }
    render() {
      return <WrappedComponent onChange = { this.handleChange }
      name = { this.state.name }
      showAlert = { this.showAlert } {...this.props }
      />
    }
  }
}