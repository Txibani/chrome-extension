
var firstHref = $("a[href^='http']").eq(0).attr("href");

var test = window.location.href;

console.log(test);

console.log(firstHref);