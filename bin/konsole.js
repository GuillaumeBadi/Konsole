
export function parse (array) {
  let args = {env: array.shift(), file: array.shift(),  list: []};
  for (let i = 0; array[i]; i++) {
    if (!!~array[i].indexOf('--'))
      args[array[i].slice(2)] = array[++i];
    else
      args.list.push(array[i]);
  }
  return args;
}

export default function konsole (fn, args) {
  return fn.call({}, args || parse(process.argv));
}
