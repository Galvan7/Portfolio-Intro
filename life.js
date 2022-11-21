document.querySelector('.cross').style.display= 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('nsb');
    if(document.querySelector('.sidebar').classList.contains('nsb')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';
        },380)
        document.querySelector('.ham').style.display='none';
    }
})
