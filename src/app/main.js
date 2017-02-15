import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import Ajax from '../Connector';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
};

export class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleCountrySelection = this.handleCountrySelection.bind(this);
    this.fetchCitiesList = this.fetchCitiesList.bind(this);

    this.state = {
      countries: this.props.countriesList,
      citiesControlEnable: false,
      citiesReceived: []
    };
  }

  fetchCitiesList(data) {
    this.setState({
      citiesReceived: JSON.parse(data),
      citiesControlEnable: true
    });
  }

  handleCountrySelection(countrySelected) {
    const ajax = new Ajax();
    const link = 'http://localhost:8080/cities/by/' + countrySelected;
    ajax.getRequest(link, this.fetchCitiesList);
  }

  render() {
    return (
      <div style={styles.container}>
        <h2>Type the base location you willing to compare:</h2>
        <AutoComplete
          floatingLabelText="Country"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.props.countriesList}
          maxSearchResults={10}
          onNewRequest={this.handleCountrySelection}
        />
        <br/>
        <AutoComplete
          floatingLabelText="City"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.state.citiesReceived}
          maxSearchResults={10}
          disabled={!this.state.citiesControlEnable}
        />
        <br/>
        <br/>
        <RaisedButton
          label="Submit"
        />
      </div>
    );
  }
}
