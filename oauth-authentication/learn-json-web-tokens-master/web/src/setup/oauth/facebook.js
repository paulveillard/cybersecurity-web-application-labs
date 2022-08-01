// Imports
import * as queryString from 'query-string'

// App imports
import { URL_WEB, OAUTH_FACEBOOK_ID } from 'setup/config/env'
import params from 'setup/config/params'
import routes from 'setup/routes'

// facebook
export default function facebook() {
  const url = queryString.stringifyUrl(
    {
      url: 'https://www.facebook.com/v6.0/dialog/oauth',
      query: {
        client_id: OAUTH_FACEBOOK_ID,
        redirect_uri: `${URL_WEB}${routes.pagesAuthorize.path}/`,
        scope: `email`,
        state: params.user.oauth.providers.facebook.key,
      },
    },
    { encode: false },
  )

  console.log(url)

  return url
}
