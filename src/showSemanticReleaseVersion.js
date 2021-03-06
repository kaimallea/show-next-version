const semanticRelease = require('semantic-release');

async function showSemanticReleaseVersion(branch, repositoryUrl) {
  try {
    const result = await semanticRelease(
      {
        branches: [branch],
        repositoryUrl,
        plugins: [
          '@semantic-release/commit-analyzer',
          '@semantic-release/release-notes-generator',
        ],
        dryRun: true,
        ci: false,
      },
      {
        cwd: '.',
      }
    );

    if (result) {
      const { lastRelease, commits, nextRelease /*, releases */ } = result;

      console.log(
        `đ This branch would publish ${nextRelease.type} release version ${nextRelease.version} containing ${commits.length} commits.`
      );

      if (lastRelease.version) {
        console.log(`âŠī¸  The last release was "${lastRelease.version}".`);
      }

      // for (const release of releases) {
      //   console.log(
      //     `The release was published with plugin "${release.pluginName}".`
      //   );
      // }
    } else {
      console.log('đ´ No release published.');
    }
  } catch (err) {
    console.error('đĨ The automated release failed with %O', err);
  }
}

module.exports = {
  showSemanticReleaseVersion,
};
