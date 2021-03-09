const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function runGitCommand(command) {
  const { stdout, stderr } = await exec(command);
  if (stderr) {
    throw new Error(stderr);
  }

  return stdout.trim();
}
async function getBranch() {
  return await runGitCommand('git branch --show-current');
}

async function getRepository() {
  return await  runGitCommand('git ls-remote --get-url origin');
}

module.exports = {
  getBranch,
  getRepository
};
