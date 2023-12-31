import { useContext, useState } from 'react';
import { RecognizeContext, RecognizeDispatchContext } from '../../App';

function FileInput() {

  // let [filename, setFilename] =useState('')
  let recognize = useContext(RecognizeContext);

  let dispatch = useContext(RecognizeDispatchContext);

  const onFileSelected = (event: any) => {

    let file = event.target.files[0];
    // setFilename(file.name);

    if (event.target.files[0]) {
      dispatch({
        value: event.target.files[0],
        type: 'choose_fille'
      })
      event.target.value = null;
    }

  };
debugger
  return (
    // <div className="input-group">
    //   <input type="file"
    //     className="form-control"
    //     id="inputGroupFile02"
    //     onChange={event => { onFileSelected(event) }}
    //   />
    // </div>

    <label className="input-file">
      <span className="input-file-text">{recognize?.file ? recognize?.file.name : '' }</span>
      <input 
      type="file"
      accept="image/png, image/gif, image/jpeg"
          // className="form-control"
          id="inputGroupFile02"
          onChange={event => { onFileSelected(event) }}
      />
        <span className="input-file-btn">Выберите файл</span>
    </label>
  );
}

export default FileInput;
