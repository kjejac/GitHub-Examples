const { Octokit, App } = require("octokit");

console.log(`TOKEN: ${process.env.GH_TOKEN}`);

const octokit = new Octokit({
    auth: process.env.GH_TOKEN
});

octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'kjejac-alt',
    repo: 'GitHub-Examples',
    ref: `refs/heads/sdksjs`,
    sha: '07ea5be1f382dcf20d29c5eb9f95c64cfdd98787',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
