(function() {

  // Character information:
  // Prefix char code: 55349
  // A-Za-z (bold): 56788 - 56839
  // A-Za-z (italics): 56840 - 56891
  // A-Za-z (bold+italics): 56892 - 56943

  function removeFormatting(ch) {
    var res = '';
    for (var i = 0, len = ch.length; i < len; ++i) {
      var code = ch.charCodeAt(i);
      if (code === 55349 && i+1 < ch.length) {
        var next = ch.charCodeAt(i + 1);
        if (next >= 56788 && next <= 56943) {
          var letterIndex = (next-56788) % 26;
          var capital = ((next-56788) % (26*2)) < 26;
          if (capital) {
            res += String.fromCharCode('A'.charCodeAt(0) + letterIndex);
          } else {
            res += String.fromCharCode('a'.charCodeAt(0) + letterIndex);
          }
          ++i;
          continue;
        }
      }
      res += ch[i];
    }
    return res;
  }

  if ('undefined' === typeof window.fonthacks) {
    window.fonthacks = {};
  }
  window.fonthacks.removeFormatting = removeFormatting;

})();
