import { argv } from 'node:process';
import { open } from 'node:fs/promises';
import { valid } from 'semver';

const validUrl = argv[2].match(/documentation-([a-z0-9])*-luos.vercel.app/g);
const newVersion = argv[3];
if (validUrl && valid(newVersion)) {
  const versionsArchivedFilePath = new URL('../versionsArchived.json', import.meta.url);
  const { default: versionsArchived } = await import(versionsArchivedFilePath, {
    assert: { type: 'json' },
  });
  const versionsArchivedFile = await open(versionsArchivedFilePath, 'r+');
  const result = await versionsArchivedFile.writeFile(
    JSON.stringify(
      Object.assign({ [newVersion]: `https://${validUrl}/docs/luos-technology` }, versionsArchived),
      null,
      2,
    ),
  );
  console.log(`Script finished: ${result}`);
  await versionsArchivedFile.close();
} else {
  console.log(`The argument : '${argv[2]}' is invalid`);
}
