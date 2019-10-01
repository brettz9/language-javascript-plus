const ttlGrammar = require('./create-ttl-grammar');

const languages = ['html', 'css'];

exports.activate = function () {
	this.ttlGrammar = new ttlGrammar(true);

	for (const scopeName of ['source.js','source.ts','source.flow']) {

		atom.grammars.addInjectionPoint(scopeName, { type: 'template_string',
			language (templateNode) {
				const node = templateNode.previousSibling;

				if (node.type === 'comment') {
					const text = node.text.toLowerCase().replace(/\/|\*/g, '');

					if (languages.includes(text)) {
						return text;
					}
				}
			},

			content (templateNode) {
				return templateNode;
			}

		});

		atom.grammars.addInjectionPoint(scopeName, { type: 'comment',

			language (commentNode) {
				const text = commentNode.text.toLowerCase().replace(/\/|\*/g, '');

				if (languages.includes(text)) {
					return text;
				}
			},

			content (commentNode) {
				const node = commentNode.nextSibling;
				if (node.type === 'template_string') {
					return node;
				}
			}

		});
	}
};

exports.deactivate = function () {
	this.ttlGrammar.destroy();
};
