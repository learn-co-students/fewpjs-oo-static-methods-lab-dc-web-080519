class Formatter {

  static capitalize(str) {
    let firstLetter = str.charAt(0)
    return str.replace(firstLetter, firstLetter.toUpperCase());
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-\s']+/g, '')
  }

  static titleize(str) {
    //exclude = arr of words to leave lower case
    let exclude = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    //split the string at each word and save as wip(work in progress)
    let wip = str.split(" ")
    //create new array and save as final to move words from wip into
    let final = []
    //always capitalize 1st word
    final.push(this.capitalize(wip.shift()))
    // debugger
    //iterate through wip ->
    wip.map(word => {
      // -> if word is in exclude list, push to final ->
      if (exclude.includes(word)) {//debugger
        final.push(word)
        // -> else capitalize then push to final
      } else {
        final.push(this.capitalize(word))
      }
    })
    //join final array back into single string with spaces
    return final.join(" ")
  }
}
