import React, { Component } from 'react';

class PlayerControls extends Component {
    render() {
        return (
            <div className="playerControls">
                <ul>
                    <li>Prev</li>
                    <li>Play / Pause</li>
                    <li>Next</li>
                </ul>
            </div>
        );
    }
}

export default PlayerControls;