function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    band[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return band
}

function johnLennonFacts(facts) {
  var i = 0
  var excitingFacts = []
  while(facts[i]) {
    excitingFacts.push(`${facts[i]}!!!`)
    i++
  }
  return excitingFacts
}

function iLoveTheBeatles() {

}
