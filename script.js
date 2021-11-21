  $.ajax({
    url:'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty',
    type: 'get',
    dataType: 'json',

      success: function(result){
        let title = result
        var hasil = result;
        document.getElementById("demo").innerHTML = 
           ` <div class="card">
            <div class="card-body" style="background-color:#66806A";"justify-content: center;align-items: center">
              <h5 class="card-title">`+hasil.by+`</h5>
              <img src="img/gambar1.jpg" class="card-img-top" style="width:200px" >
              <p class="card-text">Score: `+hasil.score+`</p>
              <p class="card-text">Jumlah Komentar: </p>
              <a href="/rest-api/wpu-movie/detail.html" class="btn btn-primary">Detail</a>
            </div>
            </div>
          </div>`
      }
  });

  $.ajax({
    url:'https://hacker-news.firebaseio.com/v0/item/8864.json?print=pretty',
    type: 'get',
    dataType: 'json',

      success: function(result){
        let title = result
        var hasil = result;
        document.getElementById("demo1").innerHTML = `
            <div class="card" style="background-color:#66806A">
            <div class="card-body">
              <h5 class="card-title">`+hasil.by+`</h5>
              <img src="img/gambar6.jpg" class="card-img-top" style="width:200px" >
              <p class="card-text">Score: `+hasil.score+`</p>
              <p class="card-text">Jumlah Komentar: </p>
              <a href="/rest-api/wpu-movie/detail.html" class="btn btn-primary">Detail</a>
            </div>
            </div>
          </div>`
      }
  });

  $.ajax({
    url:'https://hacker-news.firebaseio.com/v0/item/8865.json?print=pretty',
    type: 'get',
    dataType: 'json',

      success: function(result){
        let title = result
        var hasil = result;
        document.getElementById("demo2").innerHTML = `
            <div class="card" style="background-color:#B4C6A6">
            <div class="card-body">
              <h5 class="card-title">`+hasil.by+`</h5>
              <img src="img/gambar2.jpg" class="card-img-top" style="width:200px" >
              <p class="card-text">Score: `+hasil.score+`</p>
              <p class="card-text">Jumlah Komentar: </p>
              <a href="/rest-api/wpu-movie/detail.html" class="btn btn-primary">Detail</a>
            </div>
            </div>
          </div>`
      }
  });

  $.ajax({
    url:'https://hacker-news.firebaseio.com/v0/item/8866.json?print=pretty',
    type: 'get',
    dataType: 'json',

      success: function(result){
        let title = result
        var hasil = result;
        document.getElementById("demo3").innerHTML = `
            <div class="card" style="background-color:#B4C6A6">
            <div class="card-body">
              <h5 class="card-title">`+hasil.by+`</h5>
              <img src="img/gambar3.jpg" class="card-img-top" style="width:200px" >
              <p class="card-text">Score: `+hasil.score+`</p>
              <p class="card-text">Jumlah Komentar: </p>
              <a href="/rest-api/wpu-movie/detail.html" class="btn btn-primary">Detail</a>
            </div>
            </div>
          </div>`
      }
  });

  $.ajax({
    url:'https://hacker-news.firebaseio.com/v0/item/8867.json?print=pretty',
    type: 'get',
    dataType: 'json',

      success: function(result){
        let title = result
        var hasil = result;
        document.getElementById("demo4").innerHTML = `
            <div class="card">
            <div class="card-body" style="background-color:#89B5AF">
              <h5 class="card-title">`+hasil.by+`</h5>
              <img src="img/gambar4.jpg" class="card-img-top" style="width:200px" >
              <p class="card-text">Score: `+hasil.score+`</p>
              <p class="card-text">Jumlah Komentar: </p>
              <a href="/rest-api/wpu-movie/detail.html" class="btn btn-primary">Detail</a>
            </div>
            </div>
          </div>`
      }
  });

  $.ajax({
    url:'https://hacker-news.firebaseio.com/v0/item/8868.json?print=pretty',
    type: 'get',
    dataType: 'json',

      success: function(result){
        let title = result
        var hasil = result;
        document.getElementById("demo5").innerHTML = `
            <div class="card">
            <div class="card-body" style="background-color:#89B5AF">
              <h5 class="card-title">`+hasil.by+`</h5>
              <img src="img/gambar6.jpg" class="card-img-top" style="width:200px" >
              <p class="card-text">Score: `+hasil.score+`</p>
              <p class="card-text">Jumlah Komentar: </p>
              <a href="/rest-api/wpu-movie/detail.html" class="btn btn-primary">Detail</a>
            </div>
            </div>
          </div>`
      }
  });

  $.ajax({
    url:'https://hacker-news.firebaseio.com/v0/item/8869.json?print=pretty',
    type: 'get',
    dataType: 'json',

      success: function(result){
        let title = result
        var hasil = result;
        document.getElementById("demo6").innerHTML = `
            <div class="card">
            <div class="card-body" style="background-color:#89B5AF">
              <h5 class="card-title">`+hasil.by+`</h5>
              <img src="img/gambar7.jpg" class="card-img-top" style="width:200px" >
              <p class="card-text">Score: `+hasil.score+`</p>
              <p class="card-text">Jumlah Komentar: </p>
              <a href="/rest-api/wpu-movie/detail.html" class="btn btn-primary">Detail</a>
            </div>
            </div>
          </div>`
      }
  });

  $.ajax({
    url:'https://hacker-news.firebaseio.com/v0/item/8870.json?print=pretty',
    type: 'get',
    dataType: 'json',

      success: function(result){
        let title = result
        var hasil = result;
        document.getElementById("demo7").innerHTML = `
            <div class="card">
            <div class="card-body" style="background-color:#89B5AF">
              <h5 class="card-title">`+hasil.by+`</h5>
              <img src="img/gambar8.jpg" class="card-img-top" style="width:200px" >
              <p class="card-text">Score: `+hasil.score+`</p>
              <p class="card-text">Jumlah Komentar: </p>
              <a href="/rest-api/wpu-movie/detail.html" class="btn btn-primary">Detail</a>
            </div>
            </div>
          </div>`
      }
  });

  $.ajax({
    url:'https://hacker-news.firebaseio.com/v0/item/8871.json?print=pretty',
    type: 'get',
    dataType: 'json',

      success: function(result){
        let title = result
        var hasil = result;
        document.getElementById("demo8").innerHTML = `
            <div class="card">
            <div class="card-body" style="background-color:#89B5AF">
              <h5 class="card-title">`+hasil.by+`</h5>
              <img src="img/gambar9.jpg" class="card-img-top" style="width:200px" >
              <p class="card-text">Score: `+hasil.score+`</p>
              <p class="card-text">Jumlah Komentar: </p>
              <a href="/rest-api/wpu-movie/detail.html" class="btn btn-primary">Detail</a>
            </div>
            </div>
          </div>`
      }
  });

  $.ajax({
    url:'https://hacker-news.firebaseio.com/v0/item/8872.json?print=pretty',
    type: 'get',
    dataType: 'json',

      success: function(result){
        let title = result
        var hasil = result;
        document.getElementById("demo9").innerHTML = `
            <div class="card">
            <div class="card-body" style="background-color:#89B5AF">
              <h5 class="card-title">`+hasil.by+`</h5>
              <img src="img/gambar5.jpg" class="card-img-top" style="width:200px" > 
              <p class="card-text">Score: `+hasil.score+`</p>
              <p class="card-text">Jumlah Komentar: </p>
              <a href="/rest-api/wpu-movie/detail.html" class="btn btn-primary"  >Detail</a>
            </div>
            </div>
          </div>`
      }
  });

  $.ajax({
    url:'https://hacker-news.firebaseio.com/v0/item/121003.json?print=pretty',
    type: 'get',
    dataType: 'json',
  
      success: function(result){
        let title = result
        var hasil = result;
        document.getElementById("dem").innerHTML = `
        <div class="card">
        <div class="card-body" style="background-color:#F0E9D2">
        <a href="/rest-api/wpu-movie/index.html" class="btn btn-warning"style="float:right">Favorite</a>
              <p class="card-text" style="text-align:center; color:black">Judul: `+hasil.title+`</p>
              <p class="card-text" style="text-align:center; color:black">By : `+hasil.by+` </p>
              <p class="card-text" style="text-align:center; color:black">Time : `+hasil.time+` </p><br><br>
              
              <p class="card-text" style="text-align:left; color:black">Deskripsi : `+hasil.text+` </p><br><br>

              <h5 style="color:black">Komentar</h5>
              <div class="form-group;color:black">
              <label for="exampleFormControlTextarea1;color:black"></label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3";color:black>
              Yes, I agreed. You know, it should have been rainy season this month but until now the heat just going up. 
              The dry season has no sign of going to end and it is getting worse
              </textarea> <br>
              
            </div>
              <input class="form-control" type="text" placeholder="nice"><br>
              <input class="form-control form-control-sm" type="text" placeholder="">
            </div>
            </div>
          </div>`
          
      }
  });