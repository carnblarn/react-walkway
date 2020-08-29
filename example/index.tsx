import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Walkway from '../.';

const App = () => {
  return (
    <div>
      <Walkway
        svg={
          <svg
            version="1.1"
            id="tester"
            x="0px"
            y="0px"
            width="300px"
            height="300px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
          >
            <path
              fill="none"
              stroke="#000000"
              strokeMiterlimit="10"
              d="M56.1,132.6c0,0-8.1-78.7,57.9-78.2s88.3-23.9,67.5,36.5s-10.7,67.2-56.9,59S72.8,165.1,56.1,132.6z"
            />
            <path
              fill="none"
              stroke="#000000"
              strokeMiterlimit="10"
              d="M95.1,171.7c0,0-26.3-86.8,54.9-82.7s96.9-41.1,81.2,4.1s22.8,80.2-35.5,87.3S111.4,201.7,95.1,171.7z"
            />
          </svg>
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
