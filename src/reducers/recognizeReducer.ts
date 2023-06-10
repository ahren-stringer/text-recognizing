export type recognizeState = {
  file: null | any,
  lang: string,
  result: null | string,
  isLoading: boolean;
}

// type recognizeReducerAction = recognizeState & { type: string; }

export const recognizeInit: recognizeState = {
  file: null,
  lang: 'rus',
  result: null,
  isLoading: false,
};

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

// reducer actions. These are what you'll "dispatch"
export type recognizeReducerAction =
  | Action<'choose_lang', { value: string }>
  | Action<'choose_fille', { value: any }>
  | Action<'set_result', { value: string }>
  | Action<'loading', { value: boolean }>

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
    // default: {
    //   throw Error('Unknown action: ' + action.type);
    // }
  }
}

