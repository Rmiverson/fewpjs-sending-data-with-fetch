// Add your code here
const submitData = (userName, email) => {
   let data = {
      name: userName,
      email: email
   }

   let configObj = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
      },
      body: JSON.stringify(data)
   }

   return fetch('http://localhost:3000/users', configObj)
   .then((response) => {
      return response.json()
   })
   .then((obj) => {
      return addToBody('p', obj.id)
   })
   .catch((error) => {
      return addToBody('p', error.message)
   })
}

// helper that adds specified tag as a string to the body of the document with data
const addToBody = (tag, data) => {
   const body = document.querySelector('body')
   const t = document.createElement(tag)
   t.innerHTML = data
   body.appendChild(t)
}