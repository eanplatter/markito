import React from 'react'
import '../App.css'

export default class Cell extends React.Component {
  handleClick = () => {
    console.log('Clicked!')
  }
  render() {
    return (
      <div title={this.props.id} onClick={this.handleClick} className="Cell">
        {this.props.value}
      </div>
    )
  }
}
