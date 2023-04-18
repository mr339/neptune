import { getMetaDescription } from '@store/actions/test-actions';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@store/redux-Hooks';

interface AppProps {
  test: string;
}

const App: React.FC<AppProps> = ({}) => {
  const [timer, setTimer] = useState<number>(0);
  const dispatch = useAppDispatch();

  const test: any = useRef();

  useEffect(() => {
    let timerId = setInterval(() => {
      if (timer <= 60) {
        setTimer((prev) => prev + 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timer]);

  return (
    <>
      <div
        style={{ textAlign: 'center', fontSize: '100px', color: 'red' }}
        ref={test}
      >
        {timer}
      </div>
    </>
  );
};

export default App;
