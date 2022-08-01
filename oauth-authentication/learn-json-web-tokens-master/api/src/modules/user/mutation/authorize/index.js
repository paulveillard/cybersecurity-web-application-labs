// Imports
import bcrypt from 'bcrypt'

// App imports
import { SECURITY_SALT_ROUNDS } from 'setup/config/env'
import params from 'setup/config/params'
import v from 'setup/helpers/validation'
import { randomNumber } from 'setup/helpers/utils'
import { ValidationError } from 'modules/common/errors'
import User from 'modules/user/model'
import authResponse from 'modules/user/query/authResponse'
import facebook from './facebook'
import google from './google'
import instagram from './instagram'
import linkedin from './linkedin'
import twitter from './twitter'
import reddit from './reddit'
import discord from './discord'
import zoom from './zoom'
import github from './github'
import gitlab from './gitlab'
import digitalocean from './digitalocean'
import bitbucket from './bitbucket'
import azure from './azure'
import spotify from './spotify'
import shopify from './shopify'

// authorize
export default async function authorize({ params: { code, state } }) {
  // Validation rules
  const rules = [
    {
      data: { value: code },
      check: 'isNotEmpty',
      message: 'Invalid code.',
    },
    {
      data: { value: state },
      check: 'isNotEmpty',
      message: 'Invalid state.',
    },
  ]

  // Validate
  try {
    v.validate(rules)
  } catch (error) {
    throw new ValidationError(error.message)
  }

  try {
    let response = {
      success: false,
      message: `Unable to connect.`,
      data: false,
    }

    let userProvider

    // get user details from the platform
    switch (state) {
      // facebook
      case params.user.oauth.providers.facebook.key:
        userProvider = await facebook({ code })
        break

      // google
      case params.user.oauth.providers.google.key:
        userProvider = await google({ code })
        break

      // instagram
      case params.user.oauth.providers.instagram.key:
        userProvider = await instagram({ code })
        break

      // linkedin
      case params.user.oauth.providers.linkedin.key:
        userProvider = await linkedin({ code })
        break

      // twitter
      case params.user.oauth.providers.twitter.key:
        userProvider = await twitter({ code })
        break

      // reddit
      case params.user.oauth.providers.reddit.key:
        userProvider = await reddit({ code })
        break

      // discord
      case params.user.oauth.providers.discord.key:
        userProvider = await discord({ code })
        break

      // zoom
      case params.user.oauth.providers.zoom.key:
        userProvider = await zoom({ code })
        break

      // github
      case params.user.oauth.providers.github.key:
        userProvider = await github({ code })
        break

      // gitlab
      case params.user.oauth.providers.gitlab.key:
        userProvider = await gitlab({ code })
        break

      // digitalocean
      case params.user.oauth.providers.digitalocean.key:
        userProvider = await digitalocean({ code })
        break

      // bitbucket
      case params.user.oauth.providers.bitbucket.key:
        userProvider = await bitbucket({ code })
        break

      // azure
      case params.user.oauth.providers.azure.key:
        userProvider = await azure({ code })
        break

      // spotify
      case params.user.oauth.providers.spotify.key:
        userProvider = await spotify({ code })
        break

      // shopify
      case params.user.oauth.providers.shopify.key:
        userProvider = await shopify({ code })
        break
    }

    if (userProvider) {
      // check user already exists
      let user = await User.findOne({ email: userProvider.email })

      // create new user
      if (!user) {
        // create new password
        const password = randomNumber(100000, 999999)

        // User - create
        user = await User.create({
          email: userProvider.email,
          name: userProvider.name,
          password: await bcrypt.hash(`${password}`, SECURITY_SALT_ROUNDS),
        })
      }

      // create JWT auth token
      response.success = true
      response.message = `Welcome ${user.name}!`
      response.data = await authResponse(user)
    }

    return response
  } catch (error) {
    console.log(error)
    throw new Error(`An error occurred. ${error.message}`)
  }
}
