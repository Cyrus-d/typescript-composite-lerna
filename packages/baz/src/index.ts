import { Foobar } from 'typescript-lerna-boilerplate-bar';

function main(): void {
  console.log(Foobar() + 'baz');
}

if (process.mainModule === module) {
  main();
}
