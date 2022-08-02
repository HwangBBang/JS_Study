const copy = document.getElementById("copy");
const submit = document.getElementById("submit");

copy.onclick = function(){ 
    var text = document.getElementById("text");
    text.select(); //text 를 전부 드래그함
    document.execCommand("copy")
};

submit.onclick = function(){
    alert("답안이 성공적으로 제출 되었습니다.!")
}


