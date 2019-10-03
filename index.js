class Formatter {
  static capitalize(string) {
    let firstLetter = string.slice(0,1);
    firstLetter = firstLetter.toUpperCase();
    string = firstLetter + string.slice(1)
    return string;
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s']+/g, '');
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    let words = sentence.split(' ')
    let titleCase = words.map(word => {
      if (exceptions.includes(word)) {
        return word
      } else {
        return Formatter.capitalize(word)
      }
    })

    titleCase[0] = Formatter.capitalize(titleCase[0]);
    return titleCase.join(' ')
  }
}