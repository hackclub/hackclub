var StringUtils = StringUtils || {};

StringUtils.format = function(string) {
  var args = arguments
  return string.replace(/{(\d+)}/g, function(match, matchNumber) {
    return args[parseInt(matchNumber)+1]
  })
}
