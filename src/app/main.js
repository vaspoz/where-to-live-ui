import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
};

export class Main extends Component {
  constructor(props, context) {
    super(props, context);

    console.log(this.props.countriesList);
    this.state = {
      countries: this.props.countriesList
    };
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
        />
        <br/>
        <AutoComplete
          floatingLabelText="City"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={['aaa', 'bbb', 'ccc']}
          maxSearchResults={5}
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
