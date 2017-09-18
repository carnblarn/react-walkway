# React-Walkway

![Skylines Demo](https://media.giphy.com/media/3ohhww40hzbdsHEHUk/giphy.gif)

The [Walkway](https://github.com/ConnorAtherton/walkway) library is one of my favorites and I made this wrapper library so it could be easily used in a react application.

It supports `path`, `line` and `polyline` elements.

## Download
#### npm
```
npm install react-walkway
```

## How to use
``` js
import Walkway from 'react-walkway';
...
<Walkway 
  svg={drawing}
  onFinish={() => console.log('Animation complete')}
  options={{
    duration: '2000',
    easing: 'easeInOutQuad',
  }}
/>

```

The duration and easing function can be passed in the `options` prop. An `onFinish` callback function can be passed as a prop which will be called when the component has finished animating. The `selector` parameter in the `Walkway` library will be ignored. 

The SVG one element can be passed in one of two ways. The recommended way is to pass it in as a hard-coded html element like so:

``` js
const drawing = (
  <svg>
    <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M56.1,132.6c0,0-8.1-78.7,57.9-78.2s88.3-23.9,67.5,36.5s-10.7,67.2-56.9,59S72.8,165.1,56.1,132.6z"/>
  </svg>
);
```

The other way is to pass it in as a string. This uses `dangerouslySetInnerHTML` so make sure that all the necessary precautions have been taken if this is user-submitted SVGs.

