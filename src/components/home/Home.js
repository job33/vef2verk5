import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './Home.css';

/* hér ætti að sækja forsíðu vefþjónustu til að sækja stats */
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
      return (<div>Sæki gögn... </div>);
    }

    if (error) {
      return (<div>Villa við að sækja gögn</div>);
    }

    return(
      <div class="statistics">
        <div class="row">
          <p>Fæstir nemendur: </p>
          <div>{JSON.stringify(data.stats.min)}</div>
        </div>
        <div class="row">
          <p>Flestir nemendur: </p>
          <div>{JSON.stringify(data.stats.max)}</div>
        </div>
        <div class="row">
          <p>Fjöldi prófa: </p>
          <div>{JSON.stringify(data.stats.numTests)}</div>
        </div>
        <div class="row">
          <p>Fjöldi nemenda: </p>
          <div>{JSON.stringify(data.stats.numStudents)}</div>
        </div>
        <div class="row">
          <p>Meðalfjöldi nemenda í prófi: </p>
          <div>{JSON.parse(data.stats.averageStudents)}</div>
        </div>
      </div>)
  }
}

export default class Home extends Component {
  render() {

    return (
      <div>
        <Fetch url="https://vefforritun2-2018-v4-synilausn.herokuapp.com/stats" />
      </div>
    );
  }
}
