import React from 'react'
class AddReminder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      name: ''
    }
  }
  addReminderForm = (event) => {
    event.preventDefault()
    this.props.addReminder(this.state.name, this.state.date)
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
      date: this.state.date
    })
  }
  handleDateChange = (event) => {

    this.setState({
      name: this.state.name,
      date: event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.addReminderForm} >
        <div>
          Name: <input value={this.state.name}
            onChange={this.handleNameChange} />
        </div>
        <div>
          Date: <input type="datetime-local" value={this.state.date}
            onChange={this.handleDateChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    )
  }
}
export default AddReminder