import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: this.props.counter.value,
        tags: ["tag1", "tag2", "tag3"]
    };
    // Bind this to get 'this'
    // constructor() {
    //   super();
    //   this.handleIncrement = this.handleIncrement.bind(this);
    // }

    //arrow fn doesn't rebind 'this', use that instead (only experimental)
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <div>
                <span style={{ fontSize: 14 }} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    // onClick={this.handleIncrement}
                    onClick={() => this.handleIncrement({ id: 1 })}
                    className="btn btn-secondary btn-sm"
                >
                    Increments
                </button>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary ";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
