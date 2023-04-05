import { Component } from "react";

class ClassComp extends Component {
    state = {
        count: 0,
    };

    setCount(num) {
        this.setState({
            count: num,
        });
    }

    render() {
        return (
            <div className="flex justify-center items-center">
                <button
                    onClick={() => this.setCount(this.state.count + 1)}
                    className="bg-blue-500 px-4 py-2 rounded-md "
                >
                    +
                </button>
                <div className="ml-3">{this.state.count}</div>
                <button
                    onClick={() => {
                        if (this.state.count > 0) {
                            return this.setCount(this.state.count - 1);
                        }
                    }}
                    className="bg-red-500 px-4 py-2 rounded-md ml-3"
                >
                    -
                </button>
            </div>
        );
    }
}

export default ClassComp;
