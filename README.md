# Antti Kivi’s website

![Main workflow](https://github.com/anttikivi/anttikivi.github.io/workflows/Main%20workflow/badge.svg)

This is the source code and production code of [Antti Kivi’s](https://github.com/anttikivi) website.

The site is deployed to [GitHub Pages](https://pages.github.com) from the [`site/production`](https://github.com/anttikivi/anttikivi.github.io/tree/site/production) branch. The website is available at [anttikivi.fi](https://anttikivi.fi).

## Install

The released versions of the website are available on the [Releases page](https://github.com/anttikivi/anttikivi.github.io/releases). The latest release is naturally running as the live website at [anttikivi.fi](https://anttikivi.fi).

### Build

Before building the website, please ensure that you have [Node.js](https://nodejs.org), [npm](https://nodejs.org), and [Yarn](https://yarnpkg.com) installed.

First, clone the GitHub repository of the website.

**Via HTTPS:** If you’re checking out sources as read-only, HTTPS works best.

    git clone https://github.com/anttikivi/anttikivi.github.io.git

**Via SSH:** If you’re planning on regularly making direct commits, cloning over SSH may provide a better experience (it requires [uploading SSH keys to GitHub](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/))

    git clone git@github.com:anttikivi/anttikivi.github.io.git

**Via GitHub CLI:** If you work chiefly with GitHub, using the official [GitHub CLI](https://cli.github.com) may provide the best experience.

    gh repo clone anttikivi/anttikivi.github.io

After cloning the source, make sure to change to the cloned directory.

    cd anttikivi.github.io

Then install the dependencies for the build.

    yarn install

Finally, build the project.

    yarn build

The built site is in the `public` directory.

## Contributing

Contributions to the website are welcome and encouraged! There are many ways to [contribute](https://github.com/anttikivi/anttikivi.github.io/blob/develop/CONTRIBUTING.md#how-can-i-contribute) to it. You can find the guidelines for contributing in [CONTRIBUTING](CONTRIBUTING.md).

This project adheres to the Contributor Covenant [Code of Conduct](https://github.com/anttikivi/anttikivi.github.io/blob/develop/CODE_OF_CONDUCT.md). By participating, you’re expected to uphold this code. Please report unacceptable behaviour to antti.kivi@visiosto.fi.

## Licence

The website’s source code is licensed under the [MIT License](LICENCE).
