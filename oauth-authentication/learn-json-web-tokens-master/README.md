# OAuth

OAuth 2.0 implementation for various providers in one place.

<a href="#facebook"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/social/facebook.svg" alt="Facebook" width="30" height="30" /></a>
<a href="#google"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/social/google.svg" alt="Google" width="30" height="30" /></a>
<a href="#instagram"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/social/instagram.svg" alt="Instagram" width="30" height="30" /></a>
<a href="#linkedin"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/social/linkedin.svg" alt="LinkedIn" width="30" height="30" /></a>
<a href="#twitter"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/social/twitter.svg" alt="Twitter" width="30" height="30" /></a>
<a href="#reddit"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/social/reddit.svg" alt="Reddit" width="30" height="30" /></a>
<a href="#discord"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/social/discord.svg" alt="Discord" width="30" height="30" /></a>
<a href="#zoom"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/social/zoom.svg" alt="Zoom" width="30" height="30" /></a>
<a href="#github"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/tech/github.svg" alt="GitHub" width="30" height="30" /></a>
<a href="#gitlab"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/tech/gitlab.svg" alt="GitLab" width="30" height="30" /></a>
<a href="#digitalocean"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/tech/digitalocean.svg" alt="DigitalOcean" width="30" height="30" /></a>
<a href="#bitbucket"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/tech/bitbucket.svg" alt="Bitbucket" width="30" height="30" /></a>
<a href="#azure"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/tech/azure.svg" alt="Azure" width="30" height="30" /></a>
<a href="#spotify"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/other/spotify.svg" alt="Spotify" width="30" height="30" /></a>
<a href="#shopify"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/other/shopify.svg" alt="Shopify" width="30" height="30" /></a>

This project contains OAuth 2.0 implementation for various providers and help you understand following OAuth 2.0 flow:

1. Show platform dialog
2. Get Access Token
3. Use token to fetch user details

Actual steps implemented in this sample code repository:

1. Create redirect URL for respective platform
2. Redirect the user to respective platform
3. User decides to grant the permissions to the application
4. Receive temporary code on the server
5. Exchange the temporary code for access token
6. Get user details using the access token
7. Save user details into the database and authenticate the user

Although this project is built using React on the front-end and NodeJS on the back-end, the flow and implementation largely remains same for any other language or framework.

<img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/preview.png?v=0.1" alt="OAuth" />

## Integrations

### Social platforms

- [x] [Facebook](#facebook)
- [x] [Google](#google)
- [x] [Instagram](#instagram)
- [x] [LinkedIn](#linkedin)
- [x] [Twitter](#twitter)
- [x] [Reddit](#reddit)
- [x] [Discord](#discord)
- [x] [Zoom](#zoom)

### Tech platforms

- [x] [GitHub](#github)
- [x] [GitLab](#gitLab)
- [x] [DigitalOcean](#digitalocean)
- [x] [Bitbucket](#bitbucket)
- [x] [Azure](#azure)

### Other platforms

- [x] [Spotify](#spotify)
- [x] [Shopify](#shopify)

## Docs

### Facebook

1. Read official flow: https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow
2. Create a new application: https://developers.facebook.com/apps/
3. Goto **App → Add Product** and choose Facebook Login
4. Goto **App → Products → Facebook Login → Settings** and add a `Valid OAuth Redirect URI` as `https://example.com/authorize/` (replace your actual domain for live)
5. Goto **App → Settings** and copy `App ID` and `App Secret`
6. Update `web/.env.local` `REACT_APP_OAUTH_FACEBOOK_ID` with `App ID`
7. Update `api/.env.local` `OAUTH_FACEBOOK_ID` with `App ID`
8. Update `api/.env.local` `OAUTH_FACEBOOK_SECRET` with `App Secret`

[↑ all integrations](#integrations)

---

### Google

1. Read official flow: https://developers.google.com/identity/protocols/oauth2/web-server
2. Create a new application: https://console.cloud.google.com/projectcreate
3. Setup consent screen https://console.cloud.google.com/apis/credentials/consent
   1. Choose `External` (Available to any user with a Google Account.)
   2. In `Authorized domains` input enter `example.com`
   3. Fill in `Application Name` and click `Save` button
4. Create Credentials https://console.cloud.google.com/apis/credentials
   1. Click on `+ CREATE CREDENTIALS` button
   2. Choose `OAuth client ID`
   3. Select `Web application`
   4. For `Authorized redirect URIs`, fill in following two entries:
      1. `https://example.com/authorize/`
      2. `http://localhost:3000/authorize/`
5. Copy `Your Client ID` and `Your Client Secret`
6. Update `web/.env.local` `REACT_APP_OAUTH_GOOGLE_ID` with `Your Client ID`
7. Update `api/.env.local` `OAUTH_GOOGLE_ID` with `Your Client ID`
8. Update `api/.env.local` `OAUTH_GOOGLE_SECRET` with `Your Client Secret`

[↑ all integrations](#integrations)

---

### Instagram

1. Read official flow: https://developers.facebook.com/docs/instagram-basic-display-api/getting-started
2. Create a new application: https://developers.facebook.com/apps/
3. Goto **App → Settings → Basic** and fill in all the required fields
4. Goto **App → Add Product** and choose Instagram Basic Display
5. Click on `Create New App` button
6. Goto **App → Products → Basic Display** and fill in following
   1. `Valid OAuth Redirect URIs` as `https://example.com/authorize/`
   2. `Deauthorize Callback URL` as `https://example.com/authorize/instagram-deauthorize`
   3. `Data Deletion Request URL` as `https://example.com/authorize/instagram-delete`
7. Goto **App → Products → Basic Display → Roles → Roles** and click on `Add Instagram Testers`, search for your account and click on `Submit`
8. Accept the tester invite https://www.instagram.com/accounts/manage_access/
9. Goto **App → Products → Basic Display** and copy `Instagram App ID` and `Instagram App Secret`
10. Update `web/.env.local` `REACT_APP_OAUTH_INSTAGRAM_ID` with `Instagram App ID`
11. Update `api/.env.local` `OAUTH_INSTAGRAM_ID` with `Instagram App ID`
12. Update `api/.env.local` `OAUTH_INSTAGRAM_SECRET` with `Instagram App Secret`
13. Note:

    1. As of writing this Readme, Instagram does not accept `localhost:3000` as valid callback URI. So while testing, you may need to manually change the callback URL.
    2. For production, you need to complete `App Review for Instagram Basic Display` by submitting `instagram_graph_user_profile` and `instagram_graph_user_media` for review.

[↑ all integrations](#integrations)

---

### LinkedIn

1. Read official flow: https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow
2. Create a new application: https://www.linkedin.com/developers/apps/new and fill in following:
   1. `App name` enter your application name, eg: `Example`
   1. `Company` select an existing or create new company page
   1. `App logo` upload a logo
3. Click on `Create app` button
4. Goto **App → Auth**
   1. Under `Redirect URLs`, fill in following two entries:
      1. `http://localhost:3000/authorize/`
      2. `https://example.com/authorize/`
   2. Copy `Client ID` and `Client Secret`
5. Update `web/.env.local` `REACT_APP_OAUTH_LINKEDIN_ID` with `Client ID`
6. Update `api/.env.local` `OAUTH_LINKEDIN_ID` with `Client ID`
7. Update `api/.env.local` `OAUTH_LINKEDIN_SECRET` with `Client Secret`

[↑ all integrations](#integrations)

---

### Twitter

1. Read official flow: https://developer.twitter.com/en/docs/authentication/oauth-2-0
2. Create a new project: https://developer.twitter.com/en/portal/projects-and-apps and fill in following:
   1. `Project name` enter your project name, eg: `Example`
   2. `Project use` select appropriate use-case
3. Create a new app inside project: https://developer.twitter.com/en/portal/projects/<PROJECT_ID>/apps/create-or-connect and fill in following:
   1. `App environment` select `Development`
   2. `App name` enter your application name, eg: `Example`
   3. Click on `App Setting` button
   4. Under User authentication settings on `Setup` button
   5. Enable `OAuth 2.0`
   6. Under `Callback URI / Redirect URL`, fill in following two entries:
      1. `http://localhost:3000/authorize/`
      2. `https://example.com/authorize/`
   7. Enter `Website URL`
   8. Click `Save` button
4. Head to `Keys and token` https://developer.twitter.com/en/portal/projects/<PROJECT_ID>/apps/<APP_ID>/keys OAuth 2.0 Client ID and Client Secret section
   1. Update `web/.env.local` `REACT_APP_OAUTH_TWITTER_ID` with `Client ID`
   2. Update `api/.env.local` `OAUTH_TWITTER_ID` with `Client ID`
   3. Update `api/.env.local` `OAUTH_TWITTER_SECRET` with `Client Secret`

[↑ all integrations](#integrations)

---

### Reddit

1. Read official flow: https://github.com/reddit-archive/reddit/wiki/OAuth2
2. Create a new OAuth application: https://www.reddit.com/prefs/apps and fill in following:
   1. `name` enter your application name, eg: `Example`
   2. `description` enter info about your app, eg: `OAuth example application`
   3. `about url` enter your website url, eg: `https://example.com`
   4. `redirect uri`:
      1. For development, enter `http://localhost:3000/authorize/`
      2. For production, enter `https://example.com/authorize/`
3. Click on `create app` button
4. Copy `id` (below the entered app name) and `secret`
5. Update `web/.env.local` `REACT_APP_OAUTH_REDDIT_ID` with `id`
6. Update `api/.env.local` `OAUTH_REDDIT_ID` with `id`
7. Update `api/.env.local` `OAUTH_REDDIT_SECRET` with `secret`

[↑ all integrations](#integrations)

---

### Discord

1. Read official flow: https://discord.com/developers/docs/topics/oauth2
2. Create a new OAuth application: https://discord.com/developers/applications and click on `New Application`
3. Fill in `name`, eg: `Example` and click on `Create` button
4. Go to application's OAuth section https://discord.com/developers/applications/CLIENT_ID/oauth2 and for `Redirects`, create following two entries:
   1. `http://localhost:3000/authorize/` for development
   2. `https://example.com/authorize/` for production
5. Copy `CLIENT ID` (below the entered app name) and `CLIENT SECRET`
6. Update `web/.env.local` `REACT_APP_OAUTH_DISCORD_ID` with `CLIENT ID`
7. Update `api/.env.local` `OAUTH_DISCORD_ID` with `CLIENT ID`
8. Update `api/.env.local` `OAUTH_DISCORD_SECRET` with `CLIENT SECRET`

[↑ all integrations](#integrations)

---

### Zoom

1. Read official flow: https://marketplace.zoom.us/docs/guides/build/oauth-app
2. Create a new OAuth application: https://marketplace.zoom.us/develop/create under OAuth click `Create` button and fill in following:
   1. `Name` enter your application name, eg: `Example`
   2. Select `User-managed app`
3. Under `Redirect URL for OAuth`, enter following:
   1. For development, enter `http://localhost:3000/authorize/`
   2. For production, enter `https://example.com/authorize/`
4. Under `Whitelist URL`, enter following:
   1. For development, enter `http://localhost:3000`
   2. For production, enter `https://example.com`
5. Goto **Your App → Scopes** and click on `+ Add scopes`
   1. Select `User`
   2. Check `user:read` and `user_profile`
6. Fill in required fields under `Information` like `Short Description`, `Developer Contact Information`, etc.
7. Copy `Client ID` and `Client Secret`
8. Update `web/.env.local` `REACT_APP_OAUTH_ZOOM_ID` with `Client ID`
9. Update `api/.env.local` `OAUTH_ZOOM_ID` with `Client ID`
10. Update `api/.env.local` `OAUTH_ZOOM_SECRET` with `Client Secret`

[↑ all integrations](#integrations)

---

### GitHub

1. Read official flow: https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps
2. Create a new OAuth application: https://github.com/settings/applications/new and fill in following:
   1. `Application name` enter your application name, eg: `Example`
   2. `Homepage URL` enter your website url, eg: `https://example.com`
   3. `Authorization callback URL`:
      1. For development, enter `http://localhost:3000/authorize/`
      2. For production, enter `https://example.com/authorize/`
3. Copy `Client ID` and `Client Secret`
4. Update `web/.env.local` `REACT_APP_OAUTH_GITHUB_ID` with `Client ID`
5. Update `api/.env.local` `OAUTH_GITHUB_ID` with `Client ID`
6. Update `api/.env.local` `OAUTH_GITHUB_SECRET` with `Client Secret`

[↑ all integrations](#integrations)

---

### GitLab

1. Read official flow: https://docs.gitlab.com/ee/api/oauth2.html#web-application-flow
2. Create a new OAuth application: https://gitlab.com/profile/applications and fill in following:
   1. `Name` enter your application name, eg: `Example`
   2. `Homepage URL` enter your website url, eg: `https://example.com`
   3. `Authorization callback URL` enter `http://localhost:3000/authorize/` and on new line `https://example.com/authorize/`
3. For `Scopes` check `read_user`, `profile` and `email`
4. Click on `Save application` button and copy `Application ID` and `Secret`
5. Update `web/.env.local` `REACT_APP_OAUTH_GITLAB_ID` with `Application ID`
6. Update `api/.env.local` `OAUTH_GITLAB_ID` with `Application ID`
7. Update `api/.env.local` `OAUTH_GITLAB_SECRET` with `Secret`

[↑ all integrations](#integrations)

---

### DigitalOcean

1. Read official flow: https://docs.gitlab.com/ee/api/oauth2.html#web-application-flow
2. Create a new OAuth application: https://cloud.digitalocean.com/account/api/applications/new and fill in following:
   1. `Name` enter your application name, eg: `Example`
   2. `Homepage URL` enter your website url, eg: `https://example.com`
   3. `Description` enter info about your app, eg: `OAuth example application`
   4. `Authorization callback URL`:
      1. For development, enter `http://localhost:3000/authorize/`
      2. For production, enter `https://example.com/authorize/`
3. Click on `Save` button
4. Click on **More → View** and copy `Client ID` and `Client Secret`
5. Update `web/.env.local` `REACT_APP_OAUTH_DIGITALOCEAN_ID` with `Client ID`
6. Update `api/.env.local` `OAUTH_DIGITALOCEAN_ID` with `Client ID`
7. Update `api/.env.local` `OAUTH_DIGITALOCEAN_SECRET` with `Client Secret`

[↑ all integrations](#integrations)

---

### Bitbucket

1. Read official flow: https://confluence.atlassian.com/bitbucket/oauth-on-bitbucket-cloud-238027431.html
2. Create a new OAuth application: https://bitbucket.org/USERNAME/workspace/settings/oauth-consumers/new and fill in following:
   1. `Name` enter your application name, eg: `Example`
   2. `Homepage URL` enter your website url, eg: `https://example.com`
   3. `Description` enter info about your app, eg: `OAuth example application`
   4. `Callback URL`:
      1. For development, enter `http://localhost:3000/authorize/`
      2. For production, enter `https://example.com/authorize/`
3. Under `Permissions → Account` check `Email` and `Read`
4. Click on `Save` button
5. Click on **Name** of your application and copy `Key` and `Secret`
6. Update `web/.env.local` `REACT_APP_OAUTH_BITBUCKET_ID` with `Key`
7. Update `api/.env.local` `OAUTH_BITBUCKET_ID` with `Key`
8. Update `api/.env.local` `OAUTH_BITBUCKET_SECRET` with `Secret`

[↑ all integrations](#integrations)

---

### Azure

1. Read official flow: https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
2. Create a new OAuth application: https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade and fill in following:
   1. `Name` enter your application name, eg: `Example`
   2. `Supported account types` choose `Accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)`
   3. `Redirect URI`:
      1. For development, enter `http://localhost:3000/authorize/`
      2. For production, enter `https://example.com/authorize/`
3. Goto **Dashboard → App → Certificates & secrets** and under `Client secrets` click on `+ New client secret`
   1. Enter `Description`, eg: `Example Secret Key`
   2. For `Expires` choose `Never`
4. Click on `Add` button and copy the `Secret` value
5. Click on **Name** of your application and copy `Application (client) ID` and `Secret`
6. Update `web/.env.local` `REACT_APP_OAUTH_AZURE_ID` with `Application (client) ID`
7. Update `api/.env.local` `OAUTH_AZURE_ID` with `Application (client) ID`
8. Update `api/.env.local` `OAUTH_AZURE_SECRET` with `Secret`
9. Optionally, change `OAUTH_AZURE_TENANT` as per your requirement.

[↑ all integrations](#integrations)

---

### Spotify

1. Read official flow: https://developer.spotify.com/documentation/general/guides/authorization-guide
2. Create a new OAuth application: https://developer.spotify.com/dashboard/applications and fill in following:
   1. `App or Hardware Name` enter your application name, eg: `Example`
   2. `App or Hardware Description` enter your application name, eg: `Example OAuth app`
3. Goto **Dashboard → App** and click on `Edit settings`
4. For `Redirect URIs` make following entries:
   1. For development, enter `http://localhost:3000/authorize/`
   2. For production, enter `https://example.com/authorize/`
5. Copy `Client ID` and `Client Secret`
6. Update `web/.env.local` `REACT_APP_OAUTH_SPOTIFY_ID` with `Client ID`
7. Update `api/.env.local` `OAUTH_SPOTIFY_ID` with `Client ID`
8. Update `api/.env.local` `OAUTH_SPOTIFY_SECRET` with `Client Secret`

[↑ all integrations](#integrations)

---

### Shopify

1. Read official flow: https://shopify.dev/tutorials/authenticate-with-oauth
2. Create a new OAuth application: https://partners.shopify.com/PARTNER_ID/apps/new/applications and fill in following:
   1. `App name` enter your application name, eg: `Example`
   2. `App URL` enter your application URL, eg: `https://example.com`
   3. For `Whitelisted redirection URL(s)` make following entries:
      1. For development, enter `http://localhost:3000/authorize/`
      2. For production, enter `https://example.com/authorize/`
3. Create a store https://partners.shopify.com/PARTNER_ID/stores for testing
4. Copy `API key` and `API secret key`
5. Update `web/.env.local` `REACT_APP_OAUTH_SHOPIFY_ID` with `API key`
6. Update `web/.env.local` `REACT_APP_OAUTH_SHOPIFY_STORE` with your test store ID
7. Update `api/.env.local` `OAUTH_SHOPIFY_ID` with `API key`
8. Update `api/.env.local` `OAUTH_SHOPIFY_SECRET` with `API secret key`
9. Update `api/.env.local` `OAUTH_SHOPIFY_STORE` with your test store ID

[↑ all integrations](#integrations)

## Core Structure

    oauth
      ├── api
      │   > PORT 4000
      │   > localhost:4000
      │   > api.example.com
      │
      ├── web
      │   > PORT 3000
      │   > localhost:3000
      │   > example.com
      │
      └── README.md (you are here)

[↑ back to top](#oauth)

## Setup and Running

- **Prerequisites**

  - Node (`v12.x`)
  - MongoDB (`v4.x`)
  - IDE (Webstorm / Visual Studio Code)

- Clone repository `git clone git@github.com:atulmy/oauth.git oauth`

- **API**

  - Switch to `api` directory `cd oauth/api`
  - Configuration
    - Create local environment file `cp .env.dev .env.local`
    - Edit `.env.local` for `SECURITY_SECRET`, `DATABASE_URL` and `OAUTH_..` values
  - Setup
    - Install packages `npm install`
  - Run
    - Start API server: `npm start` (http://localhost:4000)

- **Web**
  - Switch to `web` directory `cd oauth/web`
  - Configuration
    - Create local environment file `cp .env.dev .env.local`
    - Edit `.env.local` for `REACT_APP_OAUTH_..` values
  - Setup
    - Install packages `npm install`
  - Run
    - Start web server: `npm start` (http://localhost:3000)

[↑ back to top](#oauth)

## Contribution

Found an integration not working? Open an issue / Send a Pull Request with fixes.

Looking for a particular OAuth integration not yet added? Open an issue / Send a Pull Request with additional integrations.

## Authors

- Atul Yadav - [GitHub](https://github.com/atulmy) · [Twitter](https://twitter.com/atulmy)
- [YOUR NAME HERE] - Feel free to contribute to the codebase by resolving any open issues, refactoring, adding new features, writing test cases or any other way to make the project better and helpful to the community. Feel free to fork and send pull requests.

## Community reviews

- [Reddit](https://www.reddit.com/r/javascript/comments/gi40mo/oauth_20_implementation_for_various_providers_in/)
- [Facebook](https://www.facebook.com/groups/359999434098189/permalink/2758999830864792)

## Hire me

Looking for a developer to build your next idea or need a developer to work remotely? Get in touch: [atul.12788@gmail.com](mailto:atul.12788@gmail.com)

## Donate

If you liked this project, consider donating to support it ❤️

[![Donate via PayPal](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/mix/paypal-me-smaller.png)](http://paypal.me/atulmy)

## License

Copyright (c) 2020 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)
