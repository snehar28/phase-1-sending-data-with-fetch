// Add your code here
function submitData(name,email){
    const configurationObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
        }),
    };

    return fetch("http://localhost:3000/users", configurationObj)
        .then((resp) => resp.json())
        .then(function(data) {
            document.body.innerHTML = data.id;
        })
        .catch(function(error) {
            document.body.innerHTML = error.message;
        })
}