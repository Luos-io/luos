import { argv } from 'node:process';
import { open } from 'node:fs/promises';
import { valid } from 'semver';

const newVersion = argv[2];
if (valid(newVersion)) {
  const versionsFilePath = new URL('../versions.json', import.meta.url);
  const versionsFile = await open(versionsFilePath, 'r+');
  await versionsFile.writeFile(JSON.stringify([`${newVersion}`], null, 2));
  await versionsFile.close();
  console.log(`Script finished !`);
} else {
  console.log(`The argument : '${argv[2]}' is invalid`);
}
