
export default function generatePassword(config: number, passwordLength: number): [string, number] {
  const uppercaseCollection: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const lowercaseCollection: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const numberCollection: string[] = '0123456789'.split('');
  const symbolCollection: string[] = '~!@#$%^&*()_+?'.split('');

  if (config === 0 || passwordLength === 0) {
    return ["", 0];
  }

  const collect: string[] = [];
  let currStrength: number = 0;
  if ((config & 1) !== 0) {
    collect.push(...uppercaseCollection);
    currStrength++;
  }
  if ((config & 2) !== 0) {
    collect.push(...lowercaseCollection);
    currStrength++;
  }
  if ((config & 4) !== 0) {
    collect.push(...numberCollection);
    currStrength++;
  }
  if ((config & 8) !== 0) {
    collect.push(...symbolCollection);
    currStrength++;
  }

  let res = "";
  for (let i = 0; i < passwordLength; ++i) {
    res += (collect[Math.floor(Math.random() * collect.length)]);
  }

  return [res, currStrength];
}
