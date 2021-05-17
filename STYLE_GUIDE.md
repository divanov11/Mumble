#

<div align="center">
  <img src="./frontend/public/android-chrome-512x512.png" width="15%">
  <h1 align="center">
   🎨 | Mumble Style Guide 
  </h1>

  <a href="https://discord.gg/9Du4KUY3dE">![Mumble Community](https://img.shields.io/discord/825371211399692308?label=Mumble%20Community&style=for-the-badge&logo=Discord)</a>
  <a href="https://www.mumble.dev">![Mumble](https://img.shields.io/badge/Mumble-Live%20Demo-9cf?style=for-the-badge)</a>
  <a href="http://mumble-lp.s3-website-us-west-2.amazonaws.com/">![Mumble UI Kit](https://img.shields.io/badge/Mumble-UI%20Kit-orange?style=for-the-badge)</a>

</div>

The main goal of this style guide is providing the contributors a set of instructions about how he should approach writing codes and what are the excepted when a PR has been placed. This guide will walk you through the codebase, conventions, and principles we are currently following. We, the mumble community, do not want to enforce with all kinds of code conventions to anyone, but as the project gets larger, and there are many contributors are joining each days, it'll get quiet messy very quickly unless there is a set of instructions to follow for maintaining the consistency and improving the code readability. We also believe that, having some kinds of conventions to follow is much better than having no conventions at all; without some kinds conventions 100 different people can write code 100 different ways, which will be results in messy codebase. That's why, we are introducing you to the **Mumble Style Guide**. We highly recommends you to go through the guideline time to time. We will keep this file up to date with any changes in projects.

> ⚠ _THIS DOCS IS CURRENTLY WORK-IN-PROGRESS. LOOKING FOR CONTRIBUTORS TO COMPLETE THIS GUIDELINE, ANY QUESTIONS AND SUGGESTIONS JOIN [OUR DISCORD SERVER](https://discord.gg/9Du4KUY3dE)._

<h2 align="center">Table of Contents</h2>

- [Directory Structure](#directory-structure)
- [🎭 Mumble CSS Style Guide](#-mumble-css-style-guide)
  - [📦 Modularity](#-modularity)
  - [🎹 Pattern and Naming](#-pattern-and-naming)
  - [🎨 Colors](#-colors)
  - [✍️ Fonts](#️-fonts)
  - [🧰 UI Kits](#-ui-kits)
  - [Stylelint](#stylelint)
- [⚛ Mumble React/JSX Style Guide](#-mumble-reactjsx-style-guide)
  - [📖 Basic Rules](#-basic-rules)
  - [⛑ Function Components vs Class Components](#-function-components-vs-class-components)
  - [🎯 Importing and Exporting Modules](#-importing-and-exporting-modules)
  - [🎏 Declaration](#-declaration)
  - [🔺🔻 Ordering](#-ordering)
  - [➰ Naming](#-naming)
  - [⭕ Parentheses, Spacing and Quotes](#-parentheses-spacing-and-quotes)
  - [🔯 Props and PropTypes](#-props-and-proptypes)
  - [🪁 JSX](#-jsx)

## Directory Structure

You can find project information, licence, contribution guidelines, style guides and more on the root directory. However, the main source code for the Mumble project lives on the `frontend` folder. This project is create with `create-react-app` and we respect what `create-react-app` provides us by default. Although in future, the directory structures can be changed a bit, but for the most part the current directory structure looks like this:

```sh
|-- cypress
|-- node_modules
|-- public
|-- src
    |-- __tests__
    |   |-- components
    |-- actions
    |-- assets
    |   |-- images
    |   |-- logo
    |-- common
    |-- components
    |-- constants
    |-- data
    |   |-- images
    |-- hooks
    |-- pages
    |-- reducers
    |-- services
    |-- styles
    |   |-- common
    |   |-- components
    |-- uikit
    |   |-- scripts
    |   |-- styles
    |       |-- modules
    |-- utilities
```

## 🎭 Mumble CSS Style Guide

The below specifications are all about writing clean and modular css codes for the project. While this is not a hard requirement but we love to see contributors respect to follow the style guides for maintaining the consistency throughout the project. All the styles (css files) live on `frontend/src/styles` directory. On the `styles` directory, you will find `index.css` that imports other stylesheet modules and responsible for applying application-wide the styles. `styles/common` - has all the basic and global plus the common components' stylesheets and `styles/components` - has all components' and pages' stylesheets.

```sh
|-- styles
|   |-- common
|   |-- components
```

### 📦 Modularity

Modularity in CSS provides a guideline-based approach for breaking down pages into generic reusable CSS code. It follows consistent naming conventions and allow us easy to read and maintain. There are several approach to accomplish this like using `css module`, `css in js` and good old `css architecture`. Although, `create-react-app` has the built-in support for **CSS Modules** pattern and **CSS in JS** sounds cool, but there are always some pitfalls to this, which can be extra burden-some to maintain and has a huge learning curve for beginners. That's why we are going to take a different approach. We are going to follow a most popular CSS Architecture called **BEM (Block Element Modifier)** throughout the project. BEM is beginner friendly, has almost zero learning curve. And besides that, it help us do accomplish two more things:

- Provides consistency and no-naming collisions throughout the project and
- In future, BEM will play a major role when the project will incorporate CSS preprocessor like **SASS** or **PostCSS**.

_Inline styles are not recommended to style a components but it can useful for conditional rendering in some cases._

### 🎹 Pattern and Naming

The Mumble project uses the **Block Element Modifier** methodology (commonly referred to as BEM) which is a popular naming convention for classes in HTML and CSS. BEM provides a modular structure to your CSS project. Because of its unique naming scheme, we won't run into conflicts with other CSS names. Besides that, it helps developers better understand the relationship between the HTML and CSS in a given project. You can learn more about the BEM methodology on [**getbem.com**](http://getbem.com/introduction/).

BEM in Practice:

```css
/* Block component: Standalone entity that is meaningful on its own */
.card {
}

/* Element: An entity that depends upon the block */
.card__image {
}
.card__item {
}
.card__button {
}

/* Modifier that changes the style of the block or block element*/
.card__item--active {
}
.card__button--active {
}
```

And the markup will look like this:

```html
<div class="card">
  <span class="card__image"></span>
  <div class="card__content">
    <ul class="card__list">
      <li class="card__item card__item--active">Item 1</li>
      <li class="card__item">Item 2</li>
    </ul>
    <p class="card__description">Lorem Ipsum excet tera ..</p>
    <a class="card__button" href="/">Click Here</a>
  </div>
</div>
```

What happen when the names make sense with two different naming parts. Well, can you fit into one? Take an example of naming a `element` below.

```css
/* Preferred */
.card__gallery {
}

/* Good */
.card__imageGalley {
}

/* Acceptable */
.card__imagegallery {
}

/* Not good */
.card__image-gallery

/* Not Acceptable */
.card__image_gallery {
}
.card__image--gallery {
  /* Preferred as for the modifier */
}
```

### 🎨 Colors

We are going to use css variables everywhere. Using CSS variables give us the flexibility of refactoring anytime and also help us switching between themes. Our application has two color pallettes which you can find under `frontend/src/styles/common/_variables.css` file. Variables under `:root{}` - for the light theme, and `.dark-theme{}` - for the dark theme. We recommend to use color from the color pallettes. If there is a necessary to introduce new color, add the color variables on `_variables.css` file under `:root{}`, may be a dark version under `.dark-theme{}` as well.

```css
:root {
  --color-main: #5aa5b9;
  --color-main-light: #e1f6fb;
  --color-sub: #3f4156;
  --color-sub-light: #51546e;
  --color-text: #737373;
  --color-gray: #8b8b8b;
  --color-light: #e5e7eb;
  --color-light-gray: #767676;
  --color-bg: #f8fafd;
  --color-white: #fffefd;
  --color-white-light: #fafafa;
  --color-success: #5dd693;
  --color-error: #fc4b0b;
}

.dark-theme {
  --color-main: #71c6dd;
  --color-sub-light: #3f4156;
  --color-sub: #696d97;
  --color-main-light: #3f4156;
  --color-text: #f5f5f5;
  --color-gray: #c5c5c5;
  --color-light: #313131;
  --color-light-gray: #bbb;
  --color-bg: #2d2d39;
  --color-white: #1f1f1f;
  --color-white-light: #1f1f1f;
}
```

You can use these colors anywhere on the stylesheets using CSS Variables. You can learn more about CSS variables on [MDN website](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

```css
.card {
  background-color: var(--color-bg); /*refers to #f8fafd*/
}
```

### ✍️ Fonts

The default font we are going to use is `Poppins`. It's a free font and available on [Google Fonts](https://fonts.google.com/specimen/Poppins). We have three variants for this default font. Also, if you need to use monospace font, there is another font available to use called `Fira Code` which is also freely available on [Google Font](https://fonts.google.com/specimen/Fira+Code). On the `frontend/src/styles/common/_variables.css` file, there are variables for fonts and their variants to use under `:root{}`.

```css
:root {
  /* ... Other variables */
  --font-base: 'Poppins', arial, helvetica, 'Segoe UI', roboto, ubuntu, sans-serif;
  --font-monospace: 'Fira Code', 'Courier New', courier, monospace;
  --font-regular: 300;
  --font-medium: 500;
  --font-bold: 700;
}
```

### 🧰 UI Kits

If you're just beginning and want to know about different components that are available to compose a reusable components, (a) either go to `frontend/src/common` folder and explore codes or (b) you can sneak peak a preview of that components by opening `frontend/src/uikit/index.html` on the browser.

> 🟢 **You can also visit the Mumble UI Kit online** - <a href="http://mumble-lp.s3-website-us-west-2.amazonaws.com/"><img align="center" src="https://img.shields.io/badge/Mumble-UI%20Kit-orange?style=for-the-badge"></a>

<p align="center">
<img src="./images/mumble-ui-kit.png" width="70%">
</p>

### Stylelint

Last thing, we are going to talk about is the style linter. Although we do not want to enforce people attach to some conventions, but as the project was growing into a mess and becoming hard to manage with all the different people committing their own styles and preferences, we've decided to enforce a bare minimum styles with `stylelint`. You can run `npm run stylelint` or `npm run stylelint:fix` to ensure you code is a sync with the linter. If `stylelint` failed, the github actions will be failed, which means your code will be a subject to merge.

## ⚛ Mumble React/JSX Style Guide

### 📖 Basic Rules

### ⛑ Function Components vs Class Components

### 🎯 Importing and Exporting Modules

### 🎏 Declaration

### 🔺🔻 Ordering

### ➰ Naming

### ⭕ Parentheses, Spacing and Quotes

### 🔯 Props and PropTypes

### 🪁 JSX
