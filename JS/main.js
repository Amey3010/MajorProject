
const items = document.querySelectorAll(".navmenu ul li");
function setRemove(gotIt){
    document.getElementById('active').removeAttribute('id');
    gotIt.setAttribute('id','active');   
}
window.addEventListener("load",function(e){
    var sec1 = document.getElementsByClassName("sections")[0];
    var dH = sec1.clientHeight;
    var sT = this.scrollY;
    var fis = items[1];
    var got = items[Math.floor(sT/dH)];
    if(got != document.getElementById('active'))
        setRemove(got);

    wid = window.getComputedStyle(document.getElementsByClassName("Head")[0]).getPropertyValue('width');
    const sections = document.querySelectorAll(".sections");
    sections.forEach(elements => {
        elements.style.width="calc(100% - "+wid+")";
        elements.style.setProperty("margin-left",wid)
    });
})
window.addEventListener("scroll",function(e){
    var sec1 = document.getElementsByClassName("sections")[0];
    var dH = sec1.clientHeight;
    var sT = this.scrollY;
    var fis = items[1];
    var got = items[Math.floor(sT/dH)];
    if(got != document.getElementById('active'))
        setRemove(got);
})
