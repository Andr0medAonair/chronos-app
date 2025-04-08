import { useEffect, useReducer, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

// type TaskContextProviderProps = {
//   children: React.ReactNode;
// };

export function TaskContextProvider(/*{ children }: TaskContextProviderProps*/) {
  const [state, setState] = useState(initialTaskState);

  type ActionType = {
    type: string;
    payload?: number;
  };

  const [myState, dispatch] = useReducer(
    (state, action: ActionType) => {
      switch (action.type) {
        case 'ACTION!': {
          if (!action.payload) return state
          
          return {
            ...state,
            secondsRemaning: state.secondsRemaning + action.payload,
          };
        }
      }
      return state;
    },
    {
      secondsRemaning: 0,
    },
  );

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>The state is {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: 'ACTION!', payload: 10 })}>
        ACTION!
      </button>
    </TaskContext.Provider>
  );
  // return (
  //   <TaskContext.Provider value={{state, setState}}>
  //     {children}
  //   </TaskContext.Provider>
  // );
}
