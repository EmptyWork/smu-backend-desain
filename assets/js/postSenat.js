const postarea = document.querySelector('#postarea');
    
function previewText() {
    //masih belum secure - will be add soon
    if(postarea) {
        let inputText = postarea.value;
        let iSplit = inputText.split(' ');
        iSplit.forEach(convertCode);
        let preview = document.querySelector('.postarea-preview');
        preview.innerHTML = arrayToString(iSplit);
        console.log(iSplit.toString());
    }
}

function convertCode(item, i, arr) {
    switch(item) {
        case "[tengah]":
            arr[i] = '<span class="center">';
            break;
        case "[/tengah]":
            arr[i] = '</span>';
            break;
        case "[miring]":
            arr[i] = '<i>';
            break;
        case "[/miring]":
            arr[i] = '</i>';
            break;
        case "[kepala]":
            arr[i] = '<h3 class="post-header">';
            break;
        case "[/kepala]":
            arr[i]= '</h3>';
            break;
        case "[tebal]":
            arr[i] = "<b>";
            break;
        case "[/tebal]":
            arr[i] = "</b>";
            break;
    }
}

function arrayToString(y) {
    return y.toString().replace(/,(?!,)/g, " ");
}