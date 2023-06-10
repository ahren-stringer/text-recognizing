import { useContext } from 'react';
import { SelectChangeEvent } from "@mui/material";
import { RecognizeContext, RecognizeDispatchContext } from '../../App';
import { recognizeReducerAction } from '../../reducers/recognizeReducer';
import { Context } from 'vm';

function LungSelect() {

  let dispatch = useContext(RecognizeDispatchContext);

  const langChange = (event:any) => {
    dispatch({ 
      value: event.target.value,
      type: 'choose_lang' 
    })
  };

  return (
<>
        {/* <!-- селект для выбора языка --> */}
        <select
          onChange={(event) => {langChange(event) }}
          id="langs"
          className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
        >
          <option value="rus" selected>Русский</option>
          <option value="eng">English</option>
        </select>


        {/* <div className='form_control'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Выберите язык</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="Русский">Русский</MenuItem>
              <MenuItem value="English">English</MenuItem>
            </Select>
          </FormControl>
        </div> */}
</>
  );
}

export default LungSelect;
