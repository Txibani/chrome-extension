
var firstHref = $("a[href^='http']").eq(0).attr("href");

var test = window.location.href;

console.log(test);

console.log(firstHref);

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
    function(tabs){
        var currentUrl = tabs[0].url;

        console.log(currentUrl);
        if (currentUrl.indexOf('property-to-rent') > -1) { //FIXME should look for a search on easyproperty web
            console.log('yeahhh');
            // If the console has search in it, show buttons to save
            $('.yes_show').show();
        } else {
            console.log('nooooo');
            $('.no_show').show();
        }

        // Check click no button
        var clickBtn = $('#save_property');
        clickBtn.click(function(e) {
            e.preventDefault();
            console.log('saveeee');

            // Find address, price, bathdrooms, bedrooms


        });
    }

);

