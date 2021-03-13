import React from 'react'
import axios from 'axios'
import AddReminder from './components/AddReminder'
import Reminder from './components/Reminder'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [],
       
    }
  }
  componentDidMount() {
     axios
      .get('http://localhost:3001/reminders')
      .then(response => {
            this.setState({ reminders: response.data })
      })
  }
  addReminder = (name, date) => {
    if (name && date) {
      let filter = this.state.reminders.filter(reminder => reminder.name === name && reminder.date === date)
      if (filter.length === 0) {
        const remObject = {
          name,
          date,
          id: this.state.reminders.length + 1
        }
        const reminders = this.state.reminders.concat(remObject)
        this.setState({
          reminders: reminders,
        })

      } else alert('This reminder is already on the list')
    } else alert('Fill in all fields')
  }
   render() {
    return (
      <div>
        <h2>Add new reminder</h2>
        <AddReminder addReminder={this.addReminder} />
        <h2>Reminders:</h2>
        <ul>
          {this.state.reminders.map(reminder =>
            <Reminder key={reminder.id} reminder={reminder} />
          )}
        </ul>
      </div>
    )
  }
}

export default App

