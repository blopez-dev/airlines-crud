export const title = (text)=>{
    const wrapperTitle = document.createElement('div');
    wrapperTitle.classList.add('wrapper-container');
    const title = document.createElement('h2');
    title.classList.add('h2-title');
    title.innerHTML =  text;
    wrapperTitle.appendChild(title);
    return wrapperTitle;
}