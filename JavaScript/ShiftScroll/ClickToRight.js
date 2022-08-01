const spans = document.querySelectorAll("span");
const contents = document.querySelectorAll(".content");

const firstFlag = contents[0].offsetLeft;
const secondFlag = contents[1].offsetLeft;
const thirdFlag = contents[2].offsetLeft;

spans[0].onclick = function(){
    window.scroll(
        {top:firstFlag, behavior:'smooth'}
    )
}
spans[1].onclick = function(){
    window.scroll(
        {top:secondFlag, behavior:'smooth'}
    )
}
spans[2].onclick = function(){
    window.scroll(
        {top:thirdFlag, behavior:'smooth'}
    )

}
