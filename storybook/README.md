# Mumble UI Kit Storybook
Built using Storybook.js. View the docs on https://storybook.js.org

## Using storybook

Run `yarn storybook` or `npm run storybook` to open the component library. It will start a website on http://localhost:6006 for you to view the componets.

## Known Issues
* React can not import css files outside the `src` directory so I had to copy and paste the UI kit into this project. Whenever there is an update to the UI kit css, you have to manually copy and paste the files into this project.