import React from 'react';

import './nx-react-component.module.less';

/* eslint-disable-next-line */
export interface NxReactComponentProps {}

export function NxReactComponent(props: NxReactComponentProps) {
  return (
    <div>
      <h1>Welcome to nx-react-component!</h1>
    </div>
  );
}

export default NxReactComponent;
