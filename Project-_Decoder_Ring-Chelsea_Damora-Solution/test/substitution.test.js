
const {substitution} = require('../src/substitution.js')
const expect = require('chai').expect

describe('Substitution Cipher', () =>{
  it(`(thinkful,oyqmcgrukswaflnthdjpzibev) should be jrufscpw`,() =>{
    let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
    let expected = 'jrufscpw'
    expect(actual).to.equal(expected)
  })
  
  it(`(You are an excellent spy ,oyqmcgrukswaflnthdjpzibev) should be: `, () =>{
    let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    let expected = 'elp xhm xf mbymwwmfj dne'
    expect(actual).to.equal(expected)
  })
  
  
  it (`(jrufscpw,xoyqmcgrukswaflnthdjpzibev, false) should be: thinkful`, () =>{
    let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    let expected = 'thinkful'
    expect(actual).to.equal(expected)
  })
  
  it (`(message,$wae&zrdxtfcygvuhbijnokmpl) should be: y&ii$r&`,() =>{
  let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
  let expected = 'y&ii$r&'
  expect(actual).to.equal(expected)
  })
  
  it(`(thinkful,short) should be: false`, () => {
    let actual = substitution("thinkful", "short")
    let expected = false
    expect(actual).to.equal(expected)
  })
  
  
  it(`(thinkful,bcabcabcabcabcabcabcabcyz) should be: false`, () =>{
    let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
    let expected = false
    expect(actual).to.equal(expected)
  })
})
