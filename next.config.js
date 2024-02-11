/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["www.owlguru.com","cdn.ca.emap.com","media.istockphoto.com"],
  },
  env:{
    NEXT_PUBLIC_HOME:'/',
    NEXT_PUBLIC_URL_API_IMAGE:'/',
    EMAIL:'it@oyster-technology.com',
    SITE_NAME:'oyster-technology',
    TEL:'+212 690 19 29 79',
    ADDRESS:'Rabat rue 898, Maroc',
    API_KEY_SENDGRID:"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"
  }
}

module.exports = nextConfig
