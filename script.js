const search = document.getElementById('search');
const emojiContainer = document.getElementById('emojiContainer');
const btn = document.getElementById('btn');

window.addEventListener('load',()=>{
    emojiList.forEach((ele)=>{
        let p = document.createElement('p');
        p.innerText = ele.emoji
        // console.log(emojiContainer.innerText);
        emojiContainer.append(p)
    });
});

btn.addEventListener('click',()=>{
    let inputValue = search.value.toLowerCase();
    // console.log(inputValue);
    emojiContainer.innerText = ""
    emojiList.forEach((ele)=>{   
        if(ele.description.includes(inputValue)){
            let filteredEmoji = document.createElement('p');
            filteredEmoji.innerText = ele.emoji
            emojiContainer.append(filteredEmoji)
            console.log(emojiContainer.innerText);
        }
    });
})