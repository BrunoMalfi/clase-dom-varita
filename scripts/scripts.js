console.log('----start----')

const linkList=document.body.getElementsByTagName('a') ;
const immageList=document.body.getElementsByTagName('img')
const paragraphList=document.body.getElementsByTagName('p')
const articleList=document.body.getElementsByTagName('article')

const getRanHex = size => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
  }


function changeImmage(click){
    const randomNumber = Math.floor(Math.random() * 5) + 1 ; 
    click.target.setAttribute("src","./assets/magic-"+randomNumber+".gif");
}

function changeImmage2(click){
    const originaImmage = click.target.getAttribute("src"); 
    click.target.setAttribute("src","./assets/abracadabra.gif");
    click.target.addEventListener('mouseleave',function (event){
        event.target.setAttribute("src",""+originaImmage);
    })
    //console.log('changeImmage2 post : ',click)
}



function changeParagraph(click){
    //console.log('click of a pragraph', click)
    //console.log(' pragraph : ', ' hice click en parrafo')
    click.target.style.color = '#'+getRanHex(3)+'000';
    click.target.style.background = '#'+getRanHex(3)+'000';
}

function changeParagraph2(event){
    let originalColor = event.target.style.color
    let originalBackground = event.target.style.background
    if (originalColor.length == 0 ){ originalColor = 'black'}
    if (originalBackground.length == 0 ){ originalBackground = 'white'}
    //console.log(' pragraph 2 : ', ' originalColor : '+ originalColor+' | originalBackground : '+originalBackground )
    event.target.style.color = '#'+getRanHex(3)+'000';
    event.target.style.background = '#'+getRanHex(3)+'000';
    event.target.addEventListener('mouseleave',function (event){
        event.target.style.color = originalColor
        event.target.style.background = originalBackground 
    })

}

function changeArticle(click){
    //console.log('click of a article', click.target.localName)
    if(click.target.localName == 'article' ){
        click.target.style.background = '#'+getRanHex(3)+'000';
    }
    
}

function changeArticle2(event){
    let originalBackground = event.target.style.background
    if (originalBackground.length == 0 ){ originalBackground = 'white'}
    event.target.style.background = '#'+getRanHex(3)+'000';
    event.target.addEventListener('mouseleave',function (event){
        event.target.style.background = originalBackground 
    })
}


 for (let link of linkList){
     link.setAttribute("href",document.URL);
 }

 for (let immage of immageList){
    immage.addEventListener('mouseenter',changeImmage2)
   // immage.addEventListener('mouseleave',restoreImmage)
    immage.addEventListener('click',changeImmage)
}

for (let paragraph of paragraphList){
    paragraph.addEventListener('mouseenter',changeParagraph2)
    paragraph.addEventListener('click',changeParagraph)
} 

for (let article of articleList){
    article.addEventListener('mouseenter',changeArticle2)
    article.addEventListener('click',changeArticle)
}