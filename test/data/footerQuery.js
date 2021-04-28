// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import localizedLinkQuery from './localizedLinkQuery';

const { site: linkSite, ...pages } = localizedLinkQuery;

export default {
  ...pages,
  site: {
    siteMetadata: {
      ...linkSite.siteMetadata,
      socialMedia: {
        instagram: 'https://instagram.com/anttikiwi',
        linkedin: 'https://linkedin.com/in/anttikivi',
        twitter: 'https://twitter.com/anttikiwi',
      },
    },
  },
  signature: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArElEQVQY043QWwtBQRDA8XFI7nJOrkWhpFBOuUUUj4pnD16UD+DF9/ffms0kxdSvc3a3md0ZkXck9NvEUL5HXf4MXyyLDdJm7aOGFebo6V7wq/AaLeT0pQNzlsESY72o8ZGb9B24wwoWuOKGCAV0tLCLGHcU9dIQJc0P9BHuTPo44IkHLtjqflsT8xhhhh3O6oiTjiC0rbjFHhN0MUXKtONn5QqXTVfuv2pmLi+w2Ap2m2NGhQAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/5cef2cf45670eefe13cdb72f443d5290/47397/signature.png',
            srcSet:
              '/static/5cef2cf45670eefe13cdb72f443d5290/4143e/signature.png 50w,\n/static/5cef2cf45670eefe13cdb72f443d5290/9054a/signature.png 100w,\n/static/5cef2cf45670eefe13cdb72f443d5290/47397/signature.png 200w,\n/static/5cef2cf45670eefe13cdb72f443d5290/95bb8/signature.png 400w',
            sizes: '(min-width: 200px) 200px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/5cef2cf45670eefe13cdb72f443d5290/afdce/signature.webp 50w,\n/static/5cef2cf45670eefe13cdb72f443d5290/e7df2/signature.webp 100w,\n/static/5cef2cf45670eefe13cdb72f443d5290/c0a75/signature.webp 200w,\n/static/5cef2cf45670eefe13cdb72f443d5290/81fe6/signature.webp 400w',
              type: 'image/webp',
              sizes: '(min-width: 200px) 200px, 100vw',
            },
          ],
        },
        width: 200,
        height: 65,
      },
    },
  },
  facebook: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#f8f8f8',
        images: {
          fallback: {
            src: '/static/f5294b0961a87de3bf91872909e20374/914ee/facebook.png',
            srcSet:
              '/static/f5294b0961a87de3bf91872909e20374/22867/facebook.png 8w,\n/static/f5294b0961a87de3bf91872909e20374/fbc98/facebook.png 16w,\n/static/f5294b0961a87de3bf91872909e20374/914ee/facebook.png 32w,\n/static/f5294b0961a87de3bf91872909e20374/1c9ce/facebook.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/f5294b0961a87de3bf91872909e20374/5d252/facebook.webp 8w,\n/static/f5294b0961a87de3bf91872909e20374/e789a/facebook.webp 16w,\n/static/f5294b0961a87de3bf91872909e20374/ef6ff/facebook.webp 32w,\n/static/f5294b0961a87de3bf91872909e20374/8257c/facebook.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  facebookColor: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#1878f8',
        images: {
          fallback: {
            src: '/static/f407c31b217aac6e0cd4171092d53a8c/914ee/facebook-color.png',
            srcSet:
              '/static/f407c31b217aac6e0cd4171092d53a8c/22867/facebook-color.png 8w,\n/static/f407c31b217aac6e0cd4171092d53a8c/fbc98/facebook-color.png 16w,\n/static/f407c31b217aac6e0cd4171092d53a8c/914ee/facebook-color.png 32w,\n/static/f407c31b217aac6e0cd4171092d53a8c/1c9ce/facebook-color.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/f407c31b217aac6e0cd4171092d53a8c/5d252/facebook-color.webp 8w,\n/static/f407c31b217aac6e0cd4171092d53a8c/e789a/facebook-color.webp 16w,\n/static/f407c31b217aac6e0cd4171092d53a8c/ef6ff/facebook-color.webp 32w,\n/static/f407c31b217aac6e0cd4171092d53a8c/8257c/facebook-color.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  github: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#080808',
        images: {
          fallback: {
            src: '/static/438c17272c5f0e9f4a6da34d3e4bc5bd/914ee/github.png',
            srcSet:
              '/static/438c17272c5f0e9f4a6da34d3e4bc5bd/22867/github.png 8w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/fbc98/github.png 16w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/914ee/github.png 32w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/1c9ce/github.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/438c17272c5f0e9f4a6da34d3e4bc5bd/5d252/github.webp 8w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/e789a/github.webp 16w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/ef6ff/github.webp 32w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/8257c/github.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  instagram: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#f8f8f8',
        images: {
          fallback: {
            src: '/static/0e84d5926187e7a3b785febd3a55bf1d/914ee/instagram.png',
            srcSet:
              '/static/0e84d5926187e7a3b785febd3a55bf1d/22867/instagram.png 8w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/fbc98/instagram.png 16w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/914ee/instagram.png 32w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/1c9ce/instagram.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/0e84d5926187e7a3b785febd3a55bf1d/5d252/instagram.webp 8w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/e789a/instagram.webp 16w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/ef6ff/instagram.webp 32w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/8257c/instagram.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  instagramColor: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#d82878',
        images: {
          fallback: {
            src: '/static/fafa030c53d0768359acf1f430c6aa52/914ee/instagram-color.png',
            srcSet:
              '/static/fafa030c53d0768359acf1f430c6aa52/22867/instagram-color.png 8w,\n/static/fafa030c53d0768359acf1f430c6aa52/fbc98/instagram-color.png 16w,\n/static/fafa030c53d0768359acf1f430c6aa52/914ee/instagram-color.png 32w,\n/static/fafa030c53d0768359acf1f430c6aa52/1c9ce/instagram-color.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/fafa030c53d0768359acf1f430c6aa52/5d252/instagram-color.webp 8w,\n/static/fafa030c53d0768359acf1f430c6aa52/e789a/instagram-color.webp 16w,\n/static/fafa030c53d0768359acf1f430c6aa52/ef6ff/instagram-color.webp 32w,\n/static/fafa030c53d0768359acf1f430c6aa52/8257c/instagram-color.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  linkedin: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#080808',
        images: {
          fallback: {
            src: '/static/c0ea523502937c51e46d2821e4cd45f1/914ee/linkedin.png',
            srcSet:
              '/static/c0ea523502937c51e46d2821e4cd45f1/22867/linkedin.png 8w,\n/static/c0ea523502937c51e46d2821e4cd45f1/fbc98/linkedin.png 16w,\n/static/c0ea523502937c51e46d2821e4cd45f1/914ee/linkedin.png 32w,\n/static/c0ea523502937c51e46d2821e4cd45f1/1c9ce/linkedin.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/c0ea523502937c51e46d2821e4cd45f1/5d252/linkedin.webp 8w,\n/static/c0ea523502937c51e46d2821e4cd45f1/e789a/linkedin.webp 16w,\n/static/c0ea523502937c51e46d2821e4cd45f1/ef6ff/linkedin.webp 32w,\n/static/c0ea523502937c51e46d2821e4cd45f1/8257c/linkedin.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  linkedinColor: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#2868b8',
        images: {
          fallback: {
            src: '/static/9c8e6a00a094c3d457443a762b3cfb86/914ee/linkedin-color.png',
            srcSet:
              '/static/9c8e6a00a094c3d457443a762b3cfb86/22867/linkedin-color.png 8w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/fbc98/linkedin-color.png 16w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/914ee/linkedin-color.png 32w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/1c9ce/linkedin-color.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/9c8e6a00a094c3d457443a762b3cfb86/5d252/linkedin-color.webp 8w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/e789a/linkedin-color.webp 16w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/ef6ff/linkedin-color.webp 32w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/8257c/linkedin-color.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  twitter: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#080808',
        images: {
          fallback: {
            src: '/static/b482f5b3953e7e402643775772d9f7a1/914ee/twitter.png',
            srcSet:
              '/static/b482f5b3953e7e402643775772d9f7a1/22867/twitter.png 8w,\n/static/b482f5b3953e7e402643775772d9f7a1/fbc98/twitter.png 16w,\n/static/b482f5b3953e7e402643775772d9f7a1/914ee/twitter.png 32w,\n/static/b482f5b3953e7e402643775772d9f7a1/1c9ce/twitter.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/b482f5b3953e7e402643775772d9f7a1/5d252/twitter.webp 8w,\n/static/b482f5b3953e7e402643775772d9f7a1/e789a/twitter.webp 16w,\n/static/b482f5b3953e7e402643775772d9f7a1/ef6ff/twitter.webp 32w,\n/static/b482f5b3953e7e402643775772d9f7a1/8257c/twitter.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  twitterColor: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#080808',
        images: {
          fallback: {
            src: '/static/fd7fe5d1dae728c6791714967c8731b8/914ee/twitter-color.png',
            srcSet:
              '/static/fd7fe5d1dae728c6791714967c8731b8/22867/twitter-color.png 8w,\n/static/fd7fe5d1dae728c6791714967c8731b8/fbc98/twitter-color.png 16w,\n/static/fd7fe5d1dae728c6791714967c8731b8/914ee/twitter-color.png 32w,\n/static/fd7fe5d1dae728c6791714967c8731b8/1c9ce/twitter-color.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/fd7fe5d1dae728c6791714967c8731b8/5d252/twitter-color.webp 8w,\n/static/fd7fe5d1dae728c6791714967c8731b8/e789a/twitter-color.webp 16w,\n/static/fd7fe5d1dae728c6791714967c8731b8/ef6ff/twitter-color.webp 32w,\n/static/fd7fe5d1dae728c6791714967c8731b8/8257c/twitter-color.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
};
