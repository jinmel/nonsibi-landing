

////////////////////////////////
// Custom section
////////////////////////////////


// https://stackoverflow.com/questions/13437091/is-it-possible-to-not-load-an-iframe-in-a-hidden-div-until-the-div-is-displayed

function toggle_onclick(elemIdList) {
    // Get iframe by element id
    // var toggle_elem = document.getElementById('register-form')
    for(var i = 0; i < elemIdList.length; i++)
    {
        var toggle_elem = document.getElementById(elemIdList[i])

        // Set 'hidden' to opposite of current
        if ( toggle_elem.hidden === true ) {
            toggle_elem.hidden = false
        } else {
            toggle_elem.hidden = true
        }
    }

}


////////////////////////////////
