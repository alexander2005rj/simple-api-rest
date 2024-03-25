// Importação de módulos

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Method HTTP GET')
})



// Página 404 personalizada
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

// Página 500 personalizada
app.use((req, res) => {
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

// Modificando a aplicação para que possa ser 
// requerida como um módulo
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Express started on http://localhost:${port}; `
            + 'press Ctrl-C to terminate.')
    })
} else {
    module.exports = app
}