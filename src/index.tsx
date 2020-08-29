// @ts-expect-error
import Walkway from 'walkway.js';

import * as React from 'react';

export type WalkwayEasingPresets =
  // no easing, no acceleration
  | 'linear'
  // accelerating from zero velocity
  | 'easeInQuad'
  // decelerating to zero velocity
  | 'easeOutQuad'
  // acceleration until halfway, then deceleration
  | 'easeInOutQuad'
  // accelerating from zero velocity
  | 'easeInCubic'
  // decelerating to zero velocity
  | 'easeOutCubic'
  // acceleration until halfway, then deceleration
  | 'easeInOutCubic'
  // accelerating from zero velocity
  | 'easeInQuart'
  // decelerating to zero velocity
  | 'easeOutQuart'
  // acceleration until halfway, then deceleration
  | 'easeInOutQuart'
  // accelerating from zero velocity
  | 'easeInQuint'
  // decelerating to zero velocity
  | 'easeOutQuint'
  // acceleration until halfway, then deceleration
  | 'easeInOutQuint';

export interface WalkwayProps {
  svg: React.ReactElement;

  onFinish?: () => void;
  options?: {
    /* Timing the animation runs for, default is 400 */
    duration?: string | number;
    easing?: WalkwayEasingPresets | ((t: number) => number);
  };
}

const SVG_ID_SELECTOR = 'react-walkway-selector';

const createId = () => {
  // appending a random ID so multiple instance of react-walkway can be supported
  const randomId = Math.random()
    .toString(36)
    .substr(2, 5);
  return `${SVG_ID_SELECTOR}_${randomId}`;
};

const ReactWalkway: React.FC<WalkwayProps> = props => {
  const [id] = React.useState(createId());

  React.useEffect(() => {
    const svg = new Walkway({
      selector: `svg#${id}`,
      ...props.options,
    });
    svg.draw(() => {
      if (props.onFinish) {
        props.onFinish();
      }
    });
  }, []);

  const svg = React.cloneElement(props.svg, { id });
  return svg;
};

export default ReactWalkway;
