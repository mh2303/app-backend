import http from 'http'
import { host, PORT } from './config.js'

const server = http.createServer( (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000')
	if(req.url === '/api/data' && req.method.toUpperCase() === 'GET') {
		res.write(
			JSON.stringify([
				{ user_id: 1, username: "Halil" },
				{ user_id: 2, username: "Nodir" },
				{ user_id: 3, username: "Diyor" },
				])
			)
		return res.end()
	} else {
		return res.end('Not found!')
	}
} )


server.listen( PORT,  () => console.log('*' + PORT))