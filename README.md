# JavaScript Plus
Syntax highlighting for template strings in Atom

## Install
`apm install language-javascript-plus`

## Usage
Simply declare a template tag with a prefix multiline comment with HTML or CSS and you get syntax highlighting.

## Triggers

- Comment Style
	- `/*html*/`
	- `/*css*/`

- Tagged templates

## Examples
```js
const template = /*html*/`
	<div>will have syntax highlighting</div>
`;
```

```js
// Assumes an `html` tagged template function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates

const template = html`
	<div>will have syntax highlighting</div>
`;
```

## Authors
[Alexander Elias](https://github.com/vokeio)

## License
[Why You Should Choose MPL-2.0](http://veldstra.org/2016/12/09/you-should-choose-mpl2-for-your-opensource-project.html)
This project is licensed under the MPL-2.0 License
