class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
     return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
   }

   static titleize(string) {
    let fillersArray = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let wordsArray = string.split(" ")
    let newString = [];
    
    for(let i = 0; i < wordsArray.length; i++){
      if (i === 0){
        newString.push(Formatter.capitalize(wordsArray[i]))
      }
      else if(fillersArray.includes(wordsArray[i])) {
        newString.push(wordsArray[i])
      }
      else {
        newString.push(Formatter.capitalize(wordsArray[i]))
      }
    }
    return newString.join(" ");
   }

}
