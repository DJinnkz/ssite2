
const h1 = document.getElementById('test')

h1.innerHTML += '<br> test 2 test github'

async function test() {
    try {

        console.log('Start ...')
        h1.innerHTML += '<br> Start 2...'

        //const resp = await fetch('http://185.215.160.230:8088/datasnap/rest/TServerMethods1/testJS',
        const resp = await fetch('https://9552-185-215-160-230.ngrok-free.app/datasnap/rest/TServerMethods1/testJS',                         
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'ngrok-skip-browser-warning': '5'
                }
            })

            console.log('2...')
            h1.innerHTML += '<br> 2...'
h1.innerHTML += toString(resp)
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



