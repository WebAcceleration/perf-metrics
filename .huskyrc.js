module.exports = {
  hooks: {
    'pre-commit': 'npm run type-check && lint-staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
  }
};
