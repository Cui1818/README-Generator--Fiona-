// function to generate markdown for README
function generateHTML(data) {
    var emotion = "sad";
    if(data.happy){
        emotion = "happy"
    }

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <div class="container row">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.user_name}</h5>
                        <p class="card-text">Is ${data.age} years old</p>
                        <p class="card-text">Favorite color is ${data.fav_color}</p>
                        <p class="card-text">Is ${emotion}</p>
                    </div>
                </div>
            </div>
            <div class="col-4"></div>
        </div>
    </body>
    </html>
  `;
  }
  
  module.exports = generateHTML;