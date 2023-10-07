import { useContext, useState } from 'react';
import { RecognizeContext, RecognizeDispatchContext } from '../../App';
import Recognize from '../../servises/recognize';
import Tesseract from 'tesseract.js';
import { recognizeState } from '../../reducers/recognizeReducer';

function RestartButton() {

    let dispatch = useContext(RecognizeDispatchContext);

    let restart = () =>{
        dispatch({
            type: 'clear_all'
          })
    }

    return (

        <button
            onClick={restart}
            type="button"
            className='btn btn-primary'
        >
            Распознать еще
        </button>

    );
}

export default RestartButton;
