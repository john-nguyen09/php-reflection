/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-reflection/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

module.exports = function(parent, node, ast) {
    if (!ast || !ast.kind) {
        return null;
    }

    const what = ast.kind;
    let type = null;

    if (what === 'number') {
        type = 'number';
    } else if (what === 'boolean') {
        type = 'boolean';
    } else if (what === 'string') {
        type = 'string';
    } else if (what === 'array') {
        type = 'array';
    } else if (what === 'new') {
        type = node.getNamespace().resolveClassName(ast.what);
    } else if (what === 'variable') {
        const blockVar = parent.getBlockVar();
        const variable = blockVar.getVariable(ast.name);

        if (variable && variable.type) {
            type = variable.type;
        }
    }

    return type;
}
