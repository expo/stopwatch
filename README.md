# stopwatch
A simple timing module for JS for investigating performance

```js
nesh*> .require .
stopwatch = require("/Users/ccheever/projects/stopwatch")
nesh*> s=stopwatch('hello')
Stopwatch {
  startTime: 1461813891699,
  lastTime: 1461813891699,
  step: 0,
  name: 'hello' }
nesh*> s.split('goo')
hello: 1. goo 1834ms  1834ms
undefined
nesh*> s.split('goo2')
hello: 2. goo2 4167ms  2333ms
undefined
```
