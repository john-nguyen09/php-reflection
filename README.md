# PHP Reflection

[![Build Status](https://travis-ci.org/glayzzle/php-reflection.svg?branch=master)](https://travis-ci.org/glayzzle/php-reflection)
[![Coverage Status](https://coveralls.io/repos/github/glayzzle/php-reflection/badge.svg?branch=master)](https://coveralls.io/github/glayzzle/php-reflection?branch=master)

Nodejs Reflection API for PHP files based on the [php-parser](https://github.com/glayzzle/php-parser)

# Install

```
npm install php-reflection --save
```

# Usage

```
var repository = require('php-reflection');
var workspace = new repository();
var workers = [
    workspace.parse('some-file.php'),
    workspace.parse('another-file.php'),
    workspace.parse('test-file.php')
];
Promise.all(workers).then(function() {
    console.log('-- list of functions :');
    workspace.getByType('function').each(function(fn) {
        console.log('Function Name : ', fn.name);
        console.log('Located into : ', fn.getFile().name);
        console.log('At line : ', fn.position.start.line);
    });
});
```

Read the [API docs](https://github.com/glayzzle/php-reflection/tree/master/docs) for more details.