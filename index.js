// 0e8930af92ba4bd884858b9ab93c36ca
let source = 'bbc-news';
let apiKey = '0e8930af92ba4bd884858b9ab93c36ca';

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function(){
    if(this.status===200){
        let json = JSON.parse(this.responseText);
        // console.log(json);
        let articles = json.articles;
        // console.log(articles);
        let newsHTML = "";
        articles.forEach(function(element, index){
            // console.log(element, index);
            let news = `<div class = card>
                            <div class = "card-header contents" id= "heading${index}>
                            <h2 class = "mb-0">
                                <button class="btn btn-link xyz" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                    <b> Breaking News ${index+1}: </b> ${element["title"]}
                                </button>
                                </h2>
                                </div>
                                <div class="collapse" id="collapse${index}" data-parent = "#newsAccordion" aria-labelledby = "heading${index}">
                                    <div class="card-body">
                                    ${element["content"]}. <a href = "${element["url"]}" target = "_blank"> Read more. </a>
                                    </div>
                                </div>`;
            newsHTML += news;
                        });
        newsAccordion.innerHTML = newsHTML;
    }

    else{
        console.log("Some error occured!!");
    }
}
xhr.send();

// // let search = document.getElementById('searchTxt');
// // let submit = document.getElementById('submitTxt');
// // search.addEventListener("input", function(){

//     // let inputVal = search.value.toLowerCase();
//     // console.log('Input event fired!', inputVal);
//     let noteCards = document.getElementsByClassName('contents');
//     console.log(noteCards)
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByClassName("xyz");
//         console.log("Hello")
//         console.log(element);
//     //     if(cardTxt.includes(inputVal)){
//     //         element.style.display = "block";
//     //     }
//     //     else{
//     //         element.style.display = "none";
//     //     }
//     //     // console.log(cardTxt);
//     // })
// })
