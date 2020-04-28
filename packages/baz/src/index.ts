import { Foobar } from 'typescript-composite-lerna-bar';

function main(): void {
  console.log(Foobar() + 'baz');
}

if (process.mainModule === module) {
  main();
}
