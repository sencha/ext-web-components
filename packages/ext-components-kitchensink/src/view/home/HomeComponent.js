import './home.css';
export default class HomeComponent {

  constructor() {
    // var url = './src/view/' + 'home/home.html'
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
    //   if (this.readyState === 4 && this.status === 200) {
    //     var rootElem = document.getElementById('route');
    //     rootElem.innerHTML = this.responseText;
    //   }
    // };
    // xhttp.open('GET', url, true);
    // xhttp.send();
  }

  readyButton1(event) {
    var cmp = event.detail.cmp
    //console.log('readyButton1 in Home for: ' + cmp.xtype)
  }

}
