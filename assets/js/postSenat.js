const postarea = document.querySelector('#postarea');
    
function previewText() {
    if(postarea) {
        let inputText = postarea.value;
        let iSplit = inputText.split(' ');
        let iNumber = 0;
        iSplit.forEach(element => {
            let iText = element;
            switch(iText){
                case "[tengah]":
                    iSplit[iNumber] = '<span class="center">';
                    break;
                case "[/tengah]":
                    iSplit[iNumber] = '</span>';
                    break;
                case "[miring]":
                    iSplit[iNumber] = '<i>';
                    break;
                case "[/miring]":
                    iSplit[iNumber] = '</i>';
                    break;
                case "[kepala]":
                    iSplit[iNumber] = '<h3 class="post-header">';
                    break;
                case "[/kepala]":
                    iSplit[iNumber] = '</h3>';
                    break;
                case "[tebal]":
                    iSplit[iNumber] = "<b>";
                    break;
                case "[/tebal]":
                    iSplit[iNumber] = "</b>";
                    break;
            }
            iNumber++;
        });
        let preview = document.querySelector('.postarea-preview');
        preview.innerHTML = arrayToString(iSplit);
        console.log(iSplit.toString());
    }
}

function arrayToString(y) {
    return y.toString().replace(/,/g, " ");
}


// "use strict";const postarea = document.querySelector('#postarea');function previewText() {if(postarea) {let inputText = postarea.value;let iSplit = inputText.split(' ');let iNumber = 0;iSplit.forEach(element => {let iText = element;switch(iText){case "[tengah]":iSplit[iNumber] = '<span class="center">';break;case "[/tengah]":iSplit[iNumber] = '</span>';break;case "[kepala]":iSplit[iNumber] = '<h3 class="post-header">';break;case "[/kepala]":iSplit[iNumber] = '</h3>';break;case "[tebal]":iSplit[iNumber] = "<b>";break;case "[/tebal]":iSplit[iNumber] = "</b>";break;}iNumber++;});let preview = document.querySelector('.postarea-preview');preview.innerHTML = arrayToString(iSplit);console.log(iSplit.toString());}}function arrayToString(y) {return y.toString().replace(/,/g, " ");}


    // if(postarea) {
    //     postarea.addEventListener('keypress', () => {
    //         let input = postarea.value;
    //         let iSplit = input.split(' ');
    //         let iSplitNum = 0;
    //         iSplit.forEach((e) => {
    //             let iText = e;
    //             iSplitNum++;
    //             switch(iText){
    //                 case "[bold]":
    //                     iSplit[iSplitNum] = "<b>";
    //                     break;
    //                 case "[/bold]":
    //                     iSplit[iSplitNum] = "<b>";
    //                     break;
    //             }
    //             // if(e === "["){
    //             //     console.log('test' + e);
    //             // }
    //         });
    //         let preview = document.querySelector('.postarea-preview');
    //         preview.innerHTML = iSplit;
    //         console.log(iSplit[iSplitNum]);
    //         console.log(iSplitNum);
    //     });
    // }