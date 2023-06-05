// ==UserScript==
// @name         MAC Address all Mask
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    var txt = document.evaluate('descendant::text()[string-length(normalize-space(self::text())) > 0 and not(ancestor::textarea) and not(ancestor::script) and not(ancestor::style)]',
                                document.body,null,7,null);

    for(var i=0; i<txt.snapshotLength; i++) {

        var newText = txt.snapshotItem(i).nodeValue.replace(/([0-9a-fA-F]{2}[.\-:]?[0-9a-fA-F]{2})([.\-:]?[0-9a-fA-F]{2}[.\-:]?[0-9a-fA-F]{2}){2}/gi, '<span class="hoge">**:**:**:**:**:**</span>');

        var parent = txt.snapshotItem(i).parentNode;
        var range = document.createRange();
        range.selectNode(txt.snapshotItem(i));

        var df = range.createContextualFragment(newText);

        if (df.firstChild) parent.replaceChild(df, txt.snapshotItem(i));

        range.detach();
    }

})();
