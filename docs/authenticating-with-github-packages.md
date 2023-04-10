# Authenticating with GitHub Packages
Packages sourced from the GitHub Packages npm registry require authentication.

Following the instructions [here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token),
create a personal access token on GitHub (https://github.com/settings/tokens) with the `read:packages` permission.

Then run this command:
```shell
npm login --scope=@sourcetoad --registry=https://npm.pkg.github.com/
```

For the prompts of this command use the following values:
- `Username` - Your GitHub username
- `Password` - The PAT generated above
- `Email` - The email address associated with your GitHub account
