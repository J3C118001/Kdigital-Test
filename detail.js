$.ajax({
  url:'https://hacker-news.firebaseio.com/v0/item/121003.json?print=pretty',
  type: 'get',
  dataType: 'json',

    success: function(result){
      let title = result
      var hasil = result;
      document.getElementById("dem").innerHTML = `<div class="col-md-4">
          
            <p class="card-text">Judul: `+hasil.title+`</p>
            <p class="card-text">Jumlah Komentar: </p>
            <a href="/rest-api/wpu-movie/detail.html" class="btn btn-primary">Detail</a>
          </div>
          </div>
        </div>`
    }
});