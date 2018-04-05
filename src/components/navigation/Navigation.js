import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';
import Link from 'react-router-dom/Link';

/* hér ætti að sækja gögn frá vefþjónustu fyrir valmynd */
class Fetch extends Component {
  state = { data: null, loading: true, error: false }

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching data', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData() {
    const { url } = this.props;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (<div>Sæki gögn...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gögn</div>);
    }

    return (JSON.stringify(data.schools));
  }
}

export default class Navigation extends Component {

  render() {
    return (
      <nav className="navigation">
         <Fetch url="https://vefforritun2-2018-v4-synilausn.herokuapp.com/" />
      </nav>
    );
  }
}
