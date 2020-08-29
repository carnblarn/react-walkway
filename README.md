# React-Walkway

![Skylines Demo](https://media.giphy.com/media/3ohhww40hzbdsHEHUk/giphy.gif)

This is a React wrapper for the wonderful [Walkway.js](https://github.com/ConnorAtherton/walkway) library. Written in Typescript.

## Installation and Usage

```
npm install react-walkway
```

## How to use

```tsx
import Walkway from 'react-walkway';

const Drawing = () => {
  return (
    <Walkway
      svg={
        <svg>
          <path
            fill="none"
            stroke="#000000"
            strokeMiterlimit="10"
            d="M56.1,132.6c0,0-8.1-78.7,57.9-78.2s88.3-23.9,67.5,36.5s-10.7,67.2-56.9,59S72.8,165.1,56.1,132.6z"
          />
        </svg>
      }
      onFinish={() => console.log('Animation complete')}
      options={{
        duration: '2000',
        easing: 'easeInOutQuad',
      }}
    />
  );
};
```

## Props

```ts
 /* The SVG element that is being drawn. This must be a <svg> element */
  svg: React.ReactElement;
  /* callback for when the SVG has finished drawing */
  onFinish?: () => void;
  /* the options for the underlying walkway.js library */
  options?: {
    /* Timing the animation runs for, default is 400 */
    duration?: string | number;
    easing?: WalkwayEasingPresets | ((t: number) => number);
  };
```

## v1 -> v2 Breaking Changes

The `svg` prop no longer accepts raw strings, it must be a JSX element
