
export function handleChange(context, state_name, e) {
  var newState = {};
  newState[state_name] = (typeof e.target !== "undefined") ? e.target.value : e;
  context.setState(newState);
}
