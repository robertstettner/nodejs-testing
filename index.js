'use strict'

module.exports = {
  foo: list => list.map(x => x * 2).reduce((prev, curr) => prev += curr, 0),
  bar: bool => !!bool
}