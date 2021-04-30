describe('checkout', function(){

  it('returns -1 when passed any lower case letters', function(){
    expect(checkout('aBc')).toEqual(-1)
  })

  it('returns -1 when passed a special character', function(){
    expect(checkout('-B8x')).toEqual(-1)
  })

  it('returns -1 when passed an integer', function(){
    expect(checkout(18)).toEqual(-1)
  })

  it('returns 100 when the user purchased 2 x item A', function(){
    expect(checkout('AA')).toEqual(100)
  })

  it('returns 115 when the user purchased one of each item', function(){
    expect(checkout('ABCD')).toEqual(115)
  })

  it('returns 130 and gives a special offer when the user purchased 3 x item A', function(){
    expect(checkout('AAA')).toEqual(130)
  })

  it('returns 260 and gives multiple discounts when the user purchases 6 x item A', function(){
    expect(checkout('AAAAAA')).toEqual(260)
  })
  
})
