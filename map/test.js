const languages = ["JavaScript", "PHP", "Java", "Python"];
const lengths = languages.map(function(string) {
  return {
    string: string,
    length: string.length
  };
});
console.log(lengths);