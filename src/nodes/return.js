/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-reflection/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

var Node = require('../data/node');
var Expr = require('./expr');
var typeResolve = require('../typeResolve');

/**
 * ** Extends from {@link NODE.md|:link: node} **
 *
 * Represents a constant declaration
 *
 * @public
 * @constructor Return
 * @property {expr} type {@link EXPR.md|:li
 */
var Return = Node.extends('return');

/**
 * @protected Consumes the current ast node
 */
Return.prototype.consume = function(file, parent, ast) {
    Node.prototype.consume.apply(this, arguments);

    this.type = typeResolve(parent, this, ast.expr);
};

module.exports = Return;
