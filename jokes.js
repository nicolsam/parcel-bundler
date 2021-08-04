// Common Javascript:

// module.exports = {
//     getOne: function() {
//         return new Promise((resolve, reject) => {
//             fetch('https://api.chucknorris.io/jokes/random')
//                 .then(result => result.json())
//                 .then(data => {
//                     resolve(data.value);
//                 })
//         })
//     }
// }

// ES6 Javascript:

export const jokes = {
    getOne: function() {
        return new Promise((resolve, reject) => {
            fetch('https://api.chucknorris.io/jokes/random')
                .then(result => result.json())
                .then(data => {
                    resolve(data.value);
                })
        })
    }
}