// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config({ path: './.env.local' })

// Environment
export const ENV = process.env.NODE_ENV

// Security
export const SECURITY_SECRET = process.env.SECURITY_SECRET
export const SECURITY_SALT_ROUNDS = parseInt(process.env.SECURITY_SALT_ROUNDS)

// Port
export const PORT = process.env.PORT

// Database
export const DATABASE_URL = process.env.DATABASE_URL

// URL
export const URL_API = process.env.URL_API
export const URL_WEB = process.env.URL_WEB

// Oauth
export const OAUTH_FACEBOOK_ID = process.env.OAUTH_FACEBOOK_ID
export const OAUTH_FACEBOOK_SECRET = process.env.OAUTH_FACEBOOK_SECRET

export const OAUTH_GOOGLE_ID = process.env.OAUTH_GOOGLE_ID
export const OAUTH_GOOGLE_SECRET = process.env.OAUTH_GOOGLE_SECRET

export const OAUTH_INSTAGRAM_ID = process.env.OAUTH_INSTAGRAM_ID
export const OAUTH_INSTAGRAM_SECRET = process.env.OAUTH_INSTAGRAM_SECRET

export const OAUTH_LINKEDIN_ID = process.env.OAUTH_LINKEDIN_ID
export const OAUTH_LINKEDIN_SECRET = process.env.OAUTH_LINKEDIN_SECRET

export const OAUTH_TWITTER_ID = process.env.OAUTH_TWITTER_ID
export const OAUTH_TWITTER_SECRET = process.env.OAUTH_TWITTER_SECRET

export const OAUTH_REDDIT_ID = process.env.OAUTH_REDDIT_ID
export const OAUTH_REDDIT_SECRET = process.env.OAUTH_REDDIT_SECRET

export const OAUTH_DISCORD_ID = process.env.OAUTH_DISCORD_ID
export const OAUTH_DISCORD_SECRET = process.env.OAUTH_DISCORD_SECRET

export const OAUTH_ZOOM_ID = process.env.OAUTH_ZOOM_ID
export const OAUTH_ZOOM_SECRET = process.env.OAUTH_ZOOM_SECRET

export const OAUTH_GITHUB_ID = process.env.OAUTH_GITHUB_ID
export const OAUTH_GITHUB_SECRET = process.env.OAUTH_GITHUB_SECRET

export const OAUTH_GITLAB_ID = process.env.OAUTH_GITLAB_ID
export const OAUTH_GITLAB_SECRET = process.env.OAUTH_GITLAB_SECRET

export const OAUTH_DIGITALOCEAN_ID = process.env.OAUTH_DIGITALOCEAN_ID
export const OAUTH_DIGITALOCEAN_SECRET = process.env.OAUTH_DIGITALOCEAN_SECRET

export const OAUTH_BITBUCKET_ID = process.env.OAUTH_BITBUCKET_ID
export const OAUTH_BITBUCKET_SECRET = process.env.OAUTH_BITBUCKET_SECRET

export const OAUTH_AZURE_ID = process.env.OAUTH_AZURE_ID
export const OAUTH_AZURE_SECRET = process.env.OAUTH_AZURE_SECRET
export const OAUTH_AZURE_TENANT = process.env.OAUTH_AZURE_TENANT

export const OAUTH_SPOTIFY_ID = process.env.OAUTH_SPOTIFY_ID
export const OAUTH_SPOTIFY_SECRET = process.env.OAUTH_SPOTIFY_SECRET

export const OAUTH_SHOPIFY_ID = process.env.OAUTH_SHOPIFY_ID
export const OAUTH_SHOPIFY_SECRET = process.env.OAUTH_SHOPIFY_SECRET
export const OAUTH_SHOPIFY_STORE = process.env.OAUTH_SHOPIFY_STORE
