#!/usr/bin/env node

const { getBranch, getRepository } = require('./gitCommands');
const { showSemanticReleaseVersion } = require('./showSemanticReleaseVersion');

(async function main() {
  const branch = process.env.GITHUB_HEAD_REF || (await getBranch());
  let repositoryUrl;

  if (process.env.GITHUB_SERVER_URL && process.env.GITHUB_REPOSITORY) {
    repositoryUrl = `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}`;
  } else {
    repositoryUrl = await getRepository();
  }

  showSemanticReleaseVersion(branch, repositoryUrl);
})();
