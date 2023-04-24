# gateway-bg
Gateway project, test task

# Compound
Project consists of three parts:
* _packages/gateway-bg-interface_ - provides client-server api interface, [README](./packages/gateway-bg-interface/README.md), cloned from [original repository](https://github.com/kuznetsovlv/gateway-bg-interface)
* _packages/gateway-bg_ - project's back-end, [README](./packages/gateway-bg/README.md), cloned from [original repository](https://github.com/kuznetsovlv/gateway-bg)
* _packages/gateway-front_ - project's front-end, [README](./packages/gateway-front/README.md), cloned from [original repository](https://github.com/kuznetsovlv/gateway-front)

#Scripts
* `npm install` - install dependencies
* `npx lerna run start` - start project in dev mode
* `npx lerna run build` - build project, all builds will be put into _packages/[packageName]/dist_ catalogs
* `npx lerna publish --no-private` - publish new version of _gateway-bg-interface_.

# License
[MIT](./LICENSE 'MIT') Copyright (c) 2023 kuznetsovlv
