import React from 'react';

class SearchBar extends React.Component {
    state = { term : '' };

    onInputChange(event){
        this.setState({ term : event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
             <div className="ui segment">
                <form className="ui form"
                    onSubmit={this.onFormSubmit}>
                    <div className="ui input fluid">
                        <label className="ui label">Image Search </label>
                        <input type="text" value={this.state.term}
                            onChange={event => { this.setState({ term : event.target.value.toUpperCase() }); }} />
                    </div>
                </form>
             </div>
        );
    }
}

export default SearchBar;
