export function getCurrentDate() {
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth()+1;
    let dd = new Date().getDate();
    let hh = new Date().getHours();
    let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
    let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
    return yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
};