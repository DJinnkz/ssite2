
const h1 = document.getElementById('test')

h1.innerHTML += '<br> test 2 test github'

async function test() {
    try {

        console.log('Start ...')
        h1.innerHTML += '<br> Start 2...'

        const resp = await fetch('http://127.0.0.1:8088/datasnap/rest/TServerMethods1/testJS',
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })

            console.log('2...')
            h1.innerHTML += '<br> 2...'

            const data = await resp.json()

            console.log('3...')
            h1.innerHTML += '<br> 3...'

        console.log(data)
        h1.innerHTML += '<br> ' + data.name + ' ' + data.name2


    } catch (error) {
        console.log('Error: ', error.message)
        h1.innerHTML += '<br> Error: ' + error.message
    } finally{
        console.log('End')
        h1.innerHTML += '<br> End'
    }


}

test()



