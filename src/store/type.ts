// Criando uma interface com tipo generico
// Onde o tipo generico é usado no arg0 que equivale ao parametro state do reduce
// E o arg1 sendo as actions onde o payload recebe o state

export interface ReducerFunction<State = any> {
  (
    arg0: State,
    arg1: {
      payload: State;
      type: string;
    }
  ): void;
}