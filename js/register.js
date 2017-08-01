

////////////////////////////////
// Custom section
////////////////////////////////


// https://stackoverflow.com/questions/13437091/is-it-possible-to-not-load-an-iframe-in-a-hidden-div-until-the-div-is-displayed

function toggle_registration() {
    // TODO: Get iframe by element id
    var reg_form_iframe = document.getElementById('register-form')

    // TODO: Set 'hidden' to opposite of current
    if ( reg_form_iframe.hidden === true ) {
        reg_form_iframe.hidden = false
    } else {
        reg_form_iframe.hidden = true
    }

}


////////////////////////////////
