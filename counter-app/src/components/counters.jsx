import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {

    render() {
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
        return (
            <div className="col-4">
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-small m-2">
                    Reset
                </button>
                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    />
                ))}
            </div>
        );
    }
}

// props are read only
export default Counters;
