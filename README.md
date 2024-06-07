## Code-boxes

### add a repository

```bash
git clone https://github.com/hoge hoge-project
cd hoge-project && rm -rf .git
```

### clone a repository

```bash
git init .
git config core.sparsecheckout true

#cat .git/config

echo "/projectHoge" > .git/info/sparse-checkout

git remote add origin https://github.com/rikiTada/code-boxes

git pull origin main

ls
```

### snippets

```bash
## Install

# next
npx create-next-app@latest projectName --typescript --tailwind --eslint

# shadcn
npx shadcn-ui@latest init

# zustand
npm install zustand
```
