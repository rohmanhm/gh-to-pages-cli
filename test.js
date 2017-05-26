import test from 'ava'
import execa from 'execa'

test('should return as expected', async t => {
  const url = 'https://github.com/rohmanhm/gh-to-pages'
  const expected = 'https://rohmanhm.github.io/gh-to-pages'
  const actual = await execa.shell(`node index.js ${ url }`)
  t.is(actual.stdout, expected)
})
