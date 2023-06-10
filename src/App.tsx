import { createContext, useReducer } from 'react';
import './App.css';
import Steper from './components/Steper/Steper';
import LungSelect from './components/Select/LungSelect';
import StartButton from './components/Button/StartButton';
import Result from './components/Result/Result';
import FileInput from './components/FileInput/FileInput';
import { recognizeInit, recognizeReducer, recognizeReducerAction, recognizeState } from './reducers/recognizeReducer';

export let RecognizeContext = createContext<recognizeState | null>(null);
export let RecognizeDispatchContext = createContext<React.Dispatch<recognizeReducerAction>>(() => { });

function App() {

  let [recognize, recognizeDispatch] = useReducer(recognizeReducer, recognizeInit);

  return (
    <div className="container">
      <h1 className='text-center py-5'
        style={{ paddingBottom: "53px !important;" }}
      >
        Распознование текста
      </h1>
      <Steper />
      <RecognizeContext.Provider value={recognize}>
        <RecognizeDispatchContext.Provider value={recognizeDispatch}>

          <div className='row text-center yyy' style={{ paddingBottom: "88px !important" }}>
            <Col>
              <LungSelect />
            </Col>
            <Col>
              <FileInput />
            </Col>
            <Col>
              <StartButton />
            </Col>
          </div>

          <Result />

        </RecognizeDispatchContext.Provider>
      </RecognizeContext.Provider>

    </div>
  );
}

type Props = {
  children: JSX.Element,
};
const Col = ({ children }: Props) => (
  <div className='col'>
    {children}
  </div>
);

export default App;
