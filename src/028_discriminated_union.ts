type NetworkLoadingState = {
  state: 'loading';
};
type NetworkFailedState = {
  state: 'failed';
  code: number;
};
type NetworkSuccessState = {
  state: 'success';
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState;

function logger(state: NetworkState): void {
  switch (state.state) {
    case 'loading':
      console.log('Downloading...');
      break;
    case 'failed':
      console.log(`Error ${state.code} downloading`);
      break;
    case 'success':
      console.log(`Downloaded ${state.response.title} - ${state.response.summary}`);
      break;
    default:
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
  }
}
