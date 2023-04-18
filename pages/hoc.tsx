import React from 'react';

// Define the higher-order component
function withColor(Component: any) {
  // Return a new component that renders the original component with a background color
  return function WrappedComponent(props: any) {
    return (
      <div style={{ backgroundColor: 'yellow' }}>
        <Component {...props} />
      </div>
    );
  };
}

// Define a component that we want to add a background color to using the HOC
function MyComponent() {
  return <div>This is my component</div>;
}

// Render the MyComponentWithColor
export default withColor(MyComponent);
