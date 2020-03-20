import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const isServer = req.query['server'] === 'true'; 
    if (isServer) {
        res.status(200).json('Message from api fetched from the server.')
    } else {
        res.status(200).json('Message from api fetched from the client.');
    }
}