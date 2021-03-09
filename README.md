# @kai/show-next-version

Preview what `semantic-release` thinks the next version will be for the current branch. And don't actually release anything.

### Run it locally:

```bash
npx @kai/show-next-version
```

### Run it in a GitHub Action:

```yaml
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 0
     - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 14
      # ... others
      # ... steps
      - name: Preview next version and changelog
        run: npx @kai/show-next-version
```
