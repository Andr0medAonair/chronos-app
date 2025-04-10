self.onmessage = function (event) {
  switch (event.data) {
    case 'OPEN_COMMUNICATION': {
      self.postMessage('Opening communication');
      break;
    }
    case 'CLOSE_COMMUNICATION': {
      self.postMessage('Closing...');
      self.close();
      break;
    }
    default:
      self.postMessage('Unknown command');
  }
};
