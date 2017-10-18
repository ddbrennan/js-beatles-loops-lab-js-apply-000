function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    band[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return band
}

function johnLennonFacts(facts) {
  var i = 0
  while(facts[i]) {
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}

function iLoveTheBeatles() {

}
