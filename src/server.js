import http from 'http'
import { host, PORT } from './config.js'

const server = http.createServer( (req, res) => {
	if(req.url == 'api/data' && req.method == 'GET') {
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