import { argv } from 'node:process';
import { open } from 'node:fs/promises';
import { valid } from 'semver';

const newVersion = argv[2];
if (valid(newVersion)) {
  const docusaurusConfigFilePath = new URL('../docusaurus.config.js', import.meta.url);
  const docusaurusConfigFile = await open(docusaurusConfigFilePath, 'r+');
  await docusaurusConfigFile.writeFile(JSON.stringify([`${newVersion}`], null, 2));
  await docusaurusConfigFile.close();
  console.log(`Script finished !`);
} else {
  console.log(`The argument : '${argv[2]}' is invalid`);
}
