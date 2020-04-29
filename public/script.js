const xhr = new XMLHttpRequest();

xhr.open('get','/get');

xhr.onload = () => {
    console.log(xhr.response);
};

xhr.onerror = () => {
    console.log(xhr.response);
};

// xhr.send();