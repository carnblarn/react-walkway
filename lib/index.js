import React from 'react';
import WalkwayJs from 'walkway.js';

const SVG_ID_SELECTOR = 'react-walkway-selector';

class Walkway extends React.Component {
  constructor(props) {
    super(props);

    // A random ID is used so that multiple react-walkway instances
    // can function on the same page
    const randomId = Math.random().toString(36).substr(2, 5);
    this.id = `${SVG_ID_SELECTOR}_${randomId}`;
    this.selector = `#${this.id} > svg`;

    // Walkway.js allows passing in just a selector
    // but it's simplest if it's just rolled into the options
    // parameter
    this.options = Object.assign(
      {},
      { selector: this.selector },
      this.props.options,
    );
  }

  componentDidMount() {
    this.walkway = new WalkwayJs(this.options);
    this.walkway.draw(() => {
      if (this.props.onFinish) {
        this.props.onFinish();
      }
    });
  }
  render() {
    return (
      <div id={this.id}>
        {React.createElement(this.props.svg)}
      </div>
    );
  }
}

export default Walkway;
