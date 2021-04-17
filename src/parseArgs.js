import minimist from 'minimist';

export function parseArgs() {
  return minimist(process.argv.slice(2));
}
