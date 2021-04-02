# Mumble UI Kit Storybook
Built using Storybook.js. View the docs on https://storybook.js.org.
![Storybook](./images/storybook.jpg)

## What is this?
From the Storybook library: "Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient." In the `src/components` folder, there are react wrapper for all the CSS BEM components. For example, instead of writing 
```
<button className="btn btn--main--outline">This is a button</button>
``` 
you can use a React component to render the button 
```
import {Button} from "src/components/Button"

<Button type="main" outline>This is a button</Button>
```
All the code is written using Typescript and React.

## Using storybook

Run `yarn storybook` or `npm run storybook` to open the component library. It will start a website on http://localhost:6006 for you to view the components.

## Known Issues
* React can not import css files outside the `src` directory so I had to copy and paste the UI kit into this project. Whenever there is an update to the UI kit css, you have to manually copy and paste the files into this project.