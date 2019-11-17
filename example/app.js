const onUrlChange = require('on-url-change');

module.exports = function (mutate) {
  const state = {};

  const emitter = onUrlChange();
  emitter.on('change', () => mutate.set(state, 'route', window.location.pathname));

  return state;
};
