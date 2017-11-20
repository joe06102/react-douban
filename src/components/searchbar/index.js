import React, { Component } from 'react';
import types from 'prop-types';
import styles from './index.css';
import fa from 'font-awesome/css/font-awesome.css';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = { value: '' };
        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    textChangeHandler(e){
        this.setState({ value: e.target.value })
    }

    submitHandler(e){

        const { search } = this.props;

        if(typeof search === 'function'){
            search(this.state.value);
        }
    }

    render(){

        const { style } = this.props;

        return (
            <div className={styles['searchbar-wrapper']} style={style}>
                <input type='text' value={this.state.value} onChange={this.textChangeHandler} className={styles['search-input']} placeholder='search ...'/>
                <div className={styles['search-btn-wrapper']} onClick={this.submitHandler}><i className={`${fa['fa']} ${fa['fa-search']} ${fa['fa-2x']} ${styles['search-btn']}`} /></div>
            </div>
        );  
    }
}

export { SearchBar }

SearchBar.propTypes = {
    search: types.func.isRequired,
    style: types.object
}