function Submit() {
    var d1 = document.getElementById('iDay').value;
    var m1 = document.getElementById('iMonth').value;
    var y1 = document.getElementById('iYear').value;
    var errH = document.getElementById('error-hari').classList;
    var errB = document.getElementById('error-bulan').classList;
    var errT = document.getElementById('error-tahun').classList;
    var td = document.getElementById('tDay').classList;
    var tb = document.getElementById('tMonth').classList;
    var tt = document.getElementById('tYear').classList;
    var ih = document.getElementById('iDay').classList;
    var ib = document.getElementById('iMonth').classList;
    var it = document.getElementById('iYear').classList;

    if (d1 === "" || m1 === "" || y1 === "") {
      if (d1 === ""){
        errH.remove('hidden')
        errH.add('block')
        td.remove('text-smokeGray')
        td.add('text-red-400')
        ih.remove('border-offWhite')
        ih.add('border-red-400')
      }
      
      if (m1 === ""){
        errB.remove('hidden')
        errB.add('block')
        tb.remove('text-smokeGray')
        tb.add('text-red-400')
        ib.remove('border-offWhite')
        ib.add('border-red-400')
      }
      if (y1 === ""){
        errT.remove('hidden')
        errT.add('block')
        tt.remove('text-smokeGray')
        tt.add('text-red-400')
        it.remove('border-offWhite')
        it.add('border-red-400')
      }
      return;
    }
    errH.add('hidden')
    errH.remove('block')
    td.add('text-smokeGray')
    td.remove('text-red-400')
    ih.add('border-offWhite')
    ih.remove('border-red-400')

    errB.add('hidden')
    errB.remove('block')
    tb.add('text-smokeGray')
    tb.remove('text-red-400')
    ib.add('border-offWhite')
    ib.remove('border-red-400')

    errT.add('hidden')
    errT.remove('block')
    tt.add('text-smokeGray')
    tt.remove('text-red-400')
    it.add('border-offWhite')
    it.remove('border-red-400')

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if(d1 > d2){
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if(m1 > m2){
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
  
    document.getElementById('years').innerText= y;
    document.getElementById('months').innerText= m;
    document.getElementById('days').innerText= d;
  }
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  Submit();
})

