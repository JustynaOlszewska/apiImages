export type Location = {
    state: {background: Background},
  };
  type Background = {
     pathname: string,
     search: string,
      hash: string,  
      key: string,
      state: null,
  }