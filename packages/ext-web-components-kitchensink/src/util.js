// export function getCmp(event, value) {
//     var array = event.detail.allCmp;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i]['extname'] === value) {
//             return array[i].ext;
//         }
//     }
//     return null;
// }

export function setupCmp(event, me) {
    for (var prop in event.detail.cmpObj) {
        me[prop+'Cmp'] = event.detail.cmpObj[prop];
    }
}