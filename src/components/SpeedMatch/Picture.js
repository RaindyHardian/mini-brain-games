import React from 'react';

const Picture = React.forwardRef(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

export default Picture;
