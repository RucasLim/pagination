// reference
//https://stackoverflow.com/questions/25434813/simple-pagination-in-javascript
//https://lts0606.tistory.com/477
//https://min-kyung.tistory.com/30

var btnList = document.querySelector(".pagination");
// contact list 
var cList = document.querySelector(".contact-list" );
// item list
var iList = document.querySelectorAll(".contact-item");

//max item number on page
var mItem = 10; 

//total item in list
var totalItem = iList.length;

//pages number
var nPage = Math.ceil(totalItem / 10);

function buttonPage(){
    let html = "";
    for (let i = 0; i <= nPage; i++) {
        html += `<button><a id='${i}' onclick='pagination(id)'>${i+1}</a></button>`
      }
      btnList.innerHTML = html;

}
buttonPage();



function setPage(){
    let maxPageItems = "";
    // can't ovet 10 items a page.
    for(var i = 0; i < mItem; i++){
        maxPageItems += iList[i].outerHTML;
    }
    cList.innerHTML = maxPageItems;

}
setPage();

function pagination(id) {

    let fPage = id * 10;

    let lPage; 

// last page 
    if(id == (nPage-1)){ 
        lPage = iList.length;
    } else { 
        lPage = fPage + mItem; 
    }
    
    let clikcedItems = '';  
    while(fPage < lPage){ 
        clikcedItems += iList[fPage].outerHTML;
         fPage++;
    }
    
    cList.innerHTML = clikcedItems;
}

