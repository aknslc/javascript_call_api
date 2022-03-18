document.getElementById("getOne").addEventListener("click", getOne);
document.getElementById("getAll").addEventListener("click", getAll);
document.getElementById("postData").addEventListener("click", postData);


function getOne() {

    var id = document.getElementById("postId").value;

    var url = "https://jsonplaceholder.typicode.com/posts/"+id;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            var post = JSON.parse(this.responseText);

            var html = "";

            html +=
                `
                    <div class="card mb-2" style="width: 20rem;">
                        <div class= "card-header">
                        <strong>${post.id}</strong> - TITLE: ${post.title} 
                        </div>
                        <div class="card-body">
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>

            `
            var results = document.getElementById("results");
            results.innerHTML = html;

        }

    }

    xhr.send();

}

function getAll() {
    var url = "https://jsonplaceholder.typicode.com/posts/"

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            var posts = JSON.parse(this.responseText);

            
            var html = "";

            posts.forEach(post => {

                html +=
                    `
                    <div class="card mb-2" style="width: 20rem;">
                        <div class= "card-header">
                        <strong> id: ${post.id}</strong> TITLE: ${post.title} 
                        </div>
                        <div class="card-body">
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>

            `
            });

            var results = document.getElementById("results");
            results.innerHTML = html;
        }

    }

    xhr.send();


}

function postData (){
    const data = {
        userId : 1,
        title: "New Title",
        body : "New Body"
    }

    var json = JSON.stringify(data);
    var url = "https://jsonplaceholder.typicode.com/posts/"
    var xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset= utf-8');

    xhr.onload = function (){
        if (this.readyState === 4 && this.status ===201){
            var post = this.responseText;
            console.log(post)
        }

    }

    xhr.send(json);
}