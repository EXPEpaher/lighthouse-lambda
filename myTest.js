const handlerModule = require('./test.js')

async function asyncCall () {
  const results = await handlerModule.handler({
    url: 'https://www.google.com/'
  })

  console.log(results)
}

asyncCall()
