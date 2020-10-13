const body = document.body;

function appendText() {
  const textNode = document.createTextNode("supercalifragilisticexpialidocious ".repeat(10));
  body.append(textNode);
}

appendText();
let scrolling = false;
window.onscroll = _ => {
  const scrollTop = window.pageYOffset;
    const bodyHeight = body.clientHeight;
    const wHeight = window.innerHeight;
    const diff = bodyHeight - wHeight;
    const pc = (scrollTop/diff * 100)
    if(pc >= 90) {
      setTimeout(appendText, 5000)
    }
    
    document.querySelector('.progress').style.width = `${Math.floor(pc)}%`;
    
}
    