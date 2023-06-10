import { useContext } from 'react';
import { RecognizeContext, RecognizeDispatchContext } from '../../App';
import Recognize from '../../servises/recognize';
import Tesseract from 'tesseract.js';

function StartButton() {

  function updateProgress(data: any) {
    // const statusText = //document.createTextNode(data.status);
    // const progress = document.createElement('progress');
    // progress.max = 1;
    // progress.value = data.progress;
    // log!.appendChild(statusText);
    // log!.appendChild(progress);
  }

  let dispatch = useContext(RecognizeDispatchContext);
  let recognize = useContext(RecognizeContext);

  function displayResult(text: any) {
    debugger
    dispatch({ type: 'set_result', value: '' });
    text = text.replace(/\n\s*\n/g, '\n');
    dispatch({ type: 'set_result', value: text })
    dispatch({ type: 'loading', value: false });
  }

  function rec(file: any, lang: any, logger: any) {
    return Tesseract.recognize(file, lang, { logger })
      .then(({ data: { text } }) => {
        debugger
        return text;
      })
  }

  const doRecognize = () => {
    dispatch({ type: 'loading', value: true });
    debugger
    console.log(typeof recognize?.file);
    if (recognize?.file) {
      rec(recognize?.file, recognize?.lang, updateProgress)
        .then(displayResult)
        .catch(err=> console.log(err))
    }
  };

  return (

    <button
      onClick={doRecognize}
      type="button"
      id="start"
      className='btn btn-primary'
    >
      Начать обработку
      {/* <Button variant="outlined" className='form_control' onClick={sueta}>Outlined</Button> */}
    </button>

  );
}

export default StartButton;
