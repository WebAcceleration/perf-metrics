module.exports = {
  './**/*.{js,jsx}': ['prettier --list-different --write', 'git add'],
  '!(*.spec|*.e2e-spec).{ts,tsx}': [
    'prettier --list-different --write',
    'tslint --fix -p ./tsconfig.json -c ./tslint.json',
    'jest --no-cache --config ./jest.config.js --bail --findRelatedTests --passWithNoTests',
    'git add'
  ],
  './**/*.{json,html}': ['prettier --list-different --write', 'git add'],
  '*.md': [
    'prettier --list-different --write',
    'markdownlint -c ./node_modules/@webacceleration/markdownlint-config-base/.markdownlintrc src/**/*.md *.md',
    'git add'
  ]
};
