function theBeatlesPlay(musicians, instruments) {
  const band = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return band
}

function johnLennonFacts(facts) {
  let i = 0
  const excitingFacts = []
  while(facts[i]) {
    excitingFacts.push(`${facts[i]}!!!`)
    i++
  }
  return excitingFacts
}

function iLoveTheBeatles() {

}
