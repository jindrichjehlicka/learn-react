import React, {Component} from "react";

class Counter extends Component {
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.counter.value !== this.props.counter.value) {
    //         //Ajax call ??
    //     }
    // }
    render() {
        return (
            <div className="row">
                <div className="col-2">
                <span style={{fontSize: 14}} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                </div>
                <div className="col-2">
                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className={"btn btn-secondary mr-2 btn-sm " + this.getIsDisabledClass()}
                    >
                        -
                    </button>
                </div>
                <div className="col-2">
                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary mr-2 btn-sm"
                    >
                        +
                    </button>
                </div>
                <div className="col-2">
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                    >
                        x
                    </button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary ";
        return classes;
    }

    getIsDisabledClass(){
        return (!this.props.counter.value ? 'disabled' : '');
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

}

export default Counter;
