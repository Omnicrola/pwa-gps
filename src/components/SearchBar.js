import * as React from "react";
import {connect} from "react-redux";
import '../styles/SearchBar.scss';
import {Actions} from '../constants/Actions';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="searchbar-container">
            <div className="input-wrapper">
                <input type="text"
                       placeholder="search"
                       value={this.props.searchTerm}
                       onChange={(e) => this.props.setSearchTerm(e.target.value)}
                />
                <button className="btn clear" onClick={this.props.clearSearch}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        searchTerm: state.search.term
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearSearch: () => dispatch({type: Actions.Search.CLEAR}),
        setSearchTerm: (term) => dispatch({type: Actions.Search.SET_TERM, term})
    };
}

SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);
export {SearchBar};