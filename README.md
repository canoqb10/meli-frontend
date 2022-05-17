## MeLi Frontend

This repository is related to technical challenge by Full Stack developer position and it is developed with next technologies:

- HTML
- ReactJS (Typescript)
- NextJS (Typescript)
- Material UI
- CSS (SASS)

## Table of Contents

- [Folder Structure](#folder-structure)
- [Set Up Project](#set-up-project)
- [Run Application](#run-application)
- [Testing](#testing)
- [Cleaning app](#unmount-application)
- [Author](#author)

## Folder Structure

The folder structure in the app, it should look something like:

```
.
├── Dockerfile
├── package.json
├── package-lock.json
├── tsconfig.json
├── test-utils.ts
├── sitemap.xml
├── docker-compose.yml
├── robots.txt
├── jest.config.js
├── jest.setup.js
├── next.config.js
├── next-env.d.ts
├── ignore.eslintrc.json
├── .env
├── babel.config.js
├── .prettierignore
├── .prettierrc.json
├── .gitignore
├── .eslintrc.json
├── .eslintignore
├── .dockerignore
├── __tests__
│   ├── components
│   ├── pages
│   └── index.ts
├── styles
│   ├── main.scss
│   └── _variables.scss
├── public
│   ├── assets
│   │   ├── ic_Search_2x.png
│   │   ├── ic_search.png
│   │   ├── ic_shipping.png
│   │   ├── ic_shipping@2x.png
│   │   ├── logo_ml_2x.png
│   │   └── logo_ml.png
│   ├── pages
│   │   ├── items
│   │   │  ├── [id].tsx
│   │   │  └── index.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── _error.tsx
│   │   ├── 404.tsx
│   │   ├── index.tsx
│   │   └── purchases.tsx
│   ├── lib
│   │   ├── components
│   │   │  ├── commons
│   │   │  │  ├── BreadCumb.tsx
│   │   │  │  ├── Loader.tsx
│   │   │  │  ├── Paginator.tsx
│   │   │  │  ├── SearchBar.tsx
│   │   │  │  └── index.ts
│   │   │  └── items
│   │   │  │  ├── ItemsSkeleton.tsx
│   │   │  │  ├── ItemsPreview.tsx
│   │   │  │  └── index.ts
│   │   ├── config
│   │   │  └── theme.ts
│   │   ├── layout
│   │   │  ├── page.tsx
│   │   │  ├── layout.tsx
│   │   │  └── index.tsx
│   │   ├── providers
│   │   │  ├── feedback.tsx
│   │   │  └── index.ts
│   │   ├── services
│   │   │  └── index.tsx
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   └── itypes.ts
├── run.sh
└── README.md
```

## Set Up Project

- The next dependencies are required for run the app:

  - docker
  - docker-compose

You should be sure that your docker app is to up and running correctly

## Running Application

Executes the next command:

- On your Terminal `sh run.sh`

## Testing

Integration tests suites are configured for this

- Configuration

  - Uses:

    - node v14.19.0
    - npm 8.5.0

  - Run command

    `npm install`

- Run tests

  `npm run test`

## Unmount Application

  It be sure to remove the application that is running. Execute next line

  `npm run unmount`
  
## Author

- Jose Alberto Cano Govea
- juliojacg@hotmail.com
- https://www.linkedin.com/in/jose-alberto-cano-govea-4b882370
