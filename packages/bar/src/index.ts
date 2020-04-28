import { Foo } from 'typescript-composite-lerna-foo';

export function Foobar(): string {
  return Foo() + 'bar';
}
