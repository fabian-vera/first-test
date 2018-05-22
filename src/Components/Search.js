import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div className="searchArea">
                <h3>Filtertext {this.props.filterText}</h3>
                <input type="text" value={this.props.filterText} onChange={this.props.handleChange} />
                <button onClick={this.props.clickedSearch}>SEARCH</button>
            </div>
        );
    }
}

export default Search;