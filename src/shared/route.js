import React from 'react';

/**
 * Returns an arch route definition
 * @param {String} [match] - URL path to match.
 * @param {React Component} [component] - Route component to render when hitting this route.
 * @return {Route}
 */

export default function(match, component) {
  if (typeof match !== 'string') {
    throw new TypeError(match + ' must be a string');
  }

  if (!(component.prototype instanceof React.Component)) {
    throw new TypeError(component + ' is not a React Component');
  }

  return { path: match, component: component };
}
