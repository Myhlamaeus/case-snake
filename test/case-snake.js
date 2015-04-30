/* global describe, it */

import caseSnake from '../case-snake'
import assert from 'assert'

describe('case-snake', function () {
  const tests = [
    ['T', ['T']],
    ['t', ['t']],
    ['Test', ['Test']],
    ['test', ['test']],
    ['this_Is_A_Test', ['this', 'Is', 'A', 'Test']],
    ['This_Is_A_Test', ['This', 'Is', 'A', 'Test']],
    ['THIS_Is_A_Test', ['THIS', 'Is', 'A', 'Test']]
  ]

  describe('#parse()', function () {
    for (let [name, parsed] of tests) {
      it(JSON.stringify(name) + ' -> ' + JSON.stringify(parsed), function () {
        assert.deepEqual(caseSnake.parse(name), parsed)
      })
    }
  })

  describe('#stringify()', function () {
    for (let [name, parsed] of tests) {
      it(JSON.stringify(parsed) + ' -> ' + JSON.stringify(name), function () {
        assert.equal(caseSnake.stringify(parsed), name)
      })
    }
  })

  describe('#is()', function () {
    for (let [name1, parsed] of tests) {
      const name2 = parsed.join('#')
      const val1 = parsed.length > 1

      it(JSON.stringify(name1) + ' (' + val1 + ')', function () {
        assert.equal(caseSnake.is(name1), val1)
      })
      it(JSON.stringify(name2) + ' (false)', function () {
        assert.equal(caseSnake.is(name2), false)
      })
    }
  })
})
