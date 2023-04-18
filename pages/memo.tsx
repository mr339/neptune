import React, { useState, useEffect, useMemo } from 'react';

const App = () => {
  const [state, setState] = useState({
    name: 'name',
    selected: false,
  });

  const memo = useMemo(
    () => ({
      name: state.name,
      selected: state.selected,
    }),
    [state.name, state.selected]
  );

  const addName = () => {
    setState((prev) => ({
      ...prev,
      name: 'name',
    }));
  };

  useEffect(() => {
    console.log('UsefEffect RUns!');
  }, [state.name, state.selected]);

  const addSelected = () => {
    setState({ ...state, selected: true });
  };

  return (
    <div>
      <button onClick={addName}>add Name</button>
      <button onClick={addSelected}>add selected</button>
      name: {state.name}
      selected: {state.selected.toString()}
    </div>
  );
};

export default App;
