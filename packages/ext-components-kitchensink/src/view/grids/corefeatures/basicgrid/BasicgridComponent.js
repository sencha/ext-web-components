export default class BasicgridComponent {

  constructor() {

    //var script = document.currentScript;
    //var fullUrl = script.src;
    //console.log(fullUrl)


    // try {
    // let err = new Error()
    // }
    // catch(err){
    // let link = err.stack.split('(')
    // link = link[1]
    // link = link.split(')')[0]
    // link = link.split(':')
    // link.splice(-2, 2)
    // link = link.join(':')
    // console.log(link)
    // }



    // var url = './src/view/' + 'grids/corefeatures/basicgrid/basicgrid.html'
    // //var url = 'basicgrid.html'
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
    console.log('readyButton1 in Home for: ' + cmp.xtype)
  }

}