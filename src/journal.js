export function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function () {
  var array = this.body.split(" ");
  return array.length;
};

Entry.prototype.vowelCount = function () {
  var vowels = this.body.replace(/[^aeiou]/gi, "");
  return vowels.length;
};

Entry.prototype.consonantCount = function () {
  var consonants = this.body.replace(/[^b-df-hj-np-tv-z]/gi, "");
  return consonants.length;
};

Entry.prototype.getTeaser = function () {
  var firstSentence = this.body.split(".")[0];
  var firstSentenceArray = firstSentence.split(" ");
  if (firstSentenceArray.length >= 8) {
    var firstSentencePart = firstSentenceArray.slice(0,8);
    return firstSentencePart.join(" ");
  }
  else {
    return firstSentence;
  }
}
