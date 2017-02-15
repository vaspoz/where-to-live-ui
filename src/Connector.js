export default class Ajax {
  getRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState > 3 && xhr.status === 200) {
        callback(xhr.responseText);
      }
    };
    xhr.send();

    return xhr;
  }
}
