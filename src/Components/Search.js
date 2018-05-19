import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        //this.state = {value: ''};
        //this.props.cbSearch(this.state.value);
    
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
        //this.setState({value: event.target.value});
        this.props.onHandleChange(e.target.value);
      }
    
     // handleSubmit(event) {
     //   console.log(this.state.value);
     //   event.preventDefault();
     // }
    
    render() {
        
        return (
            <div className="searchArea">
                    <input type="text" value={this.props.filterText} onChange={this.handleChange} />
                   {/* <button title="button test" onClick={this.handleSubmit}>TEST</button> */}
            </div>
        );
    }
    
}

export default Search;