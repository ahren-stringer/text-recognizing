import { useContext } from 'react';
import { RecognizeContext, RecognizeDispatchContext } from '../../App';

function FileInput() {

  let dispatch = useContext(RecognizeDispatchContext);

  const onFileSelected = (event: any) => {

    if (event.target.files[0]) {
      dispatch({
        value: event.target.files[0],
        type: 'choose_fille'
      })
    }

  };

  return (
      <div className="input-group">
        <input type="file"
          className="form-control"
          id="inputGroupFile02"
          onChange={event => { onFileSelected(event) }}
        />
      </div>
  );
}

export default FileInput;
