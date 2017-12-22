/*Create a new website with external js file

Add a button (e.g. 'click me') that when clicked console.logs 'you clicked me!'

Create a function that fetches from The Github API. For example from [this page] (https://api.github.com/orgs/HackYourFuture/repos) (the one we used last week). For help on this check this SO post

Display the data that you get from the Github API on your web page.

Now link the two together: When you click the button -> get the data from the Github API and display it on your website

Make all the repositories link their own page in Github. Use the value of the key: name to make this work (hint: Github urls always look like this https://api.github.com/repos/HackYourFuture/[repositoryName] where [repositoryName] would be replaced by the actual name of the repository, for example CommandLine). Make sure the link opens in a new tab.
*/
const mybutton = document.querySelector('button');
mybutton.addEventListener('click', function() {
    console.log("you clicked me!")
});
const myButtonClick = function(){
const fetchUrl = "https://api.github.com/orgs/HackYourFuture/repos";
const listRepos = document.querySelector('.list_repos');
 listRepos.innerHTML = "";

const req = new XMLHttpRequest();
req.addEventListener('load', function(data) {

        if (this.status === 200) {

            const responseText = req.responseText;

            const data = JSON.parse(responseText);

            console.log(data.name);


            data.forEach(function(repo) {
                const liElement = document.createElement('li');

                const dataUrl = 'https://api.github.com/repos/HackYourFuture/' + repo.name;
                liElement.innerHTML = '<a href="' + dataUrl + '" target="_blank">' + dataUrl + '</a>';

                listRepos.appendChild(liElement);
            });

}
else {
    console.log('Something is probably wrong with the url');
}
});
req.open('GET', fetchUrl);
req.send();

}
mybutton.addEventListener("click", myButtonClick)
