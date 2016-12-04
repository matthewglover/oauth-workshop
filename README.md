# OAuth Workshop

## What
Implementing OAuth from scratch

## Why
To understand the OAuth Flow and how to implement it without using a 3rd party OAuth helper library like Bell.

## How
Authenticating with Github using Hapi and Request


### Quickstart
1. Run `npm install`
2. Add a `config.env` at the root with the following:
```
export BASE_URL=[your-base-url]
export CLIENT_ID=[your-github-client-id]
export CLIENT_SECRET=[your-github-client-secret]
```
3. Run the server `npm start` or (in development mode using nodemon) `npm run dev`
