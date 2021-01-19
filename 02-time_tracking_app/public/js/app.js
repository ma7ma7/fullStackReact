class TimerDashboard extends React.Component {
  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList />
          <ToggleableTimerForm isOpen={true} />
        </div>
      </div>
    );
  }
}

class EditableTimerList extends React.Component {
  render() {
    return (
      <div id="timers">
        <EditableTimer
          title="Learn React"
          project="Web Domination"
          elapsed="8986300"
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title="Learn Extern"
          project="Web Domination"
          elapsed="3986300"
          runningSince={null}
          editFormOpen={true}
        />
      </div>
    );
  }
}

class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return <TimerForm />;
    } else {
      return (
        <div className="ui basic content center aligned segment">
          <div className="ui basic button icon">
            <i className="plus icon"></i>
          </div>
        </div>
      );
    }
  }
}

class EditableTimer extends React.Component {
  render() {
    if (this.props.editFormOpen) {
      return (
        <TimerForm title={this.props.title} project={this.props.project} />
      );
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      );
    }
  }
}

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? "Update" : "Create";
    return (
      <div className="ui centred card">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <input type="text" defaultValue={this.props.title} />
            </div>
            <div className="field">
              <label>Projct</label>
              <input type="text" defaultValue={this.props.projct} />
            </div>
            <div className="ui two bottom attached buttons">
              <button className="ui basic blue button">{submitText}</button>
              <button className="ui basic red button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return (
      <div className="ui centred card">
        <div className="content">
          <div className="header">{this.props.title}</div>
          <div className="meta">{this.props.project}</div>
          <div className="centred aligned description">
            <h2>{elapsedString}</h2>
          </div>
          <div className="extra content">
            <span className="right floated edit icon">
              <i className="edit icon"></i>
            </span>
            <span className="right floated trash icon">
              <i className="trash icon"></i>
            </span>
          </div>
        </div>
        <div className="ui bottom attached blue basic button">Start</div>
      </div>
    );
  }
}

ReactDOM.render(<TimerDashboard />, document.getElementById("content"));
