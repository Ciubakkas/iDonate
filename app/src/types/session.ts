export interface SessionFromState {
  firebase: {
    isReady: boolean;
  };
  isReady: boolean;
  isError: boolean;
  triggers: {
    logout: number;
    signInWithEmail: number;
    signInWithGoogle: number;
    signInWithKLP: number;
  };
}
