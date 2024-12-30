function rotateContent(blockClass, interval) {
    const block = document.querySelector(`.${blockClass} .content-container`);
    const contents = block.querySelectorAll('.content');
    let index = 0;

    setInterval(() => {
        contents[index].classList.remove('active');
        index = (index + 1) % contents.length;
        contents[index].classList.add('active');
    }, interval);
}
//min_al = 5000;
//max_al = 11000;
//let valor1 = Math.trunc(Math.random() * (max_al - min_al) + min_al);
//let valor2 = Math.trunc(Math.random() * (max_al - min_al) + min_al);
//let valor3 = Math.trunc(Math.random() * (max_al - min_al) + min_al);
//let valor4 = Math.trunc(Math.random() * (max_al - min_al) + min_al);

rotateContent('clases', 11000);
rotateContent('talleres', 8000);
rotateContent('curiosidades', 7000);
rotateContent('trucos', 6000);
