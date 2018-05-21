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
                { <button onClick={this.props.clickedSearch}>SEARCH</button> }
                    { /*
                        this.state.resultyt.map((item, i) => {
                        var itemVideo = <li key={i} className="youtube">
                            <div datasrc={item.url}>
                            <img src={item.thumbnail} />
                            <h4>{item.title}</h4>
                            </div>
                        </li>
                        return itemVideo;
                        })
                    */}
                    {/* this.itemVideo */}
            </div>
        );
    }
}

export default Search;