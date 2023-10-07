export type recognizeState = {
  file: null | any,
  lang: string,
  result: null | string,
  isLoading: boolean,
  disabledBtn: boolean
}

// type recognizeReducerAction = recognizeState & { type: string; }

export const recognizeInit: recognizeState = {
  file: null,
  lang: 'rus',
  result: null,
  isLoading: false,
  disabledBtn: false
};

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

// reducer actions. These are what you'll "dispatch"
export type recognizeReducerAction =
  | Action<'choose_lang', { value: string }>
  | Action<'choose_fille', { value: any }>
  | Action<'set_result', { value: string }>
  | Action<'loading', { value: boolean }>
  | Action<'clear_all'>
  | Action<'disable_btn'>

export function recognizeReducer(state: recognizeState = recognizeInit, action: recognizeReducerAction): recognizeState {
  switch (action.type) {
    case 'choose_lang': {
      return {
        ...state, lang: action.value
      }
    }
    case 'choose_fille': {
      return {
        ...state, file: action.value
      }
    }
    case 'set_result': {
      return {
        ...state, result: action.value
      }
    }
    case 'loading': {
      return {
        ...state, isLoading: action.value
      }
    }
    case 'clear_all': {
      return recognizeInit
    }
    case 'disable_btn': {
      return {
        ...state, disabledBtn: !state.disabledBtn
      }
    }
    // default: {
    //   throw Error('Unknown action: ' + action.type);
    // }
  }
}

