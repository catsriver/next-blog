import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export interface BodyEnterty {
    email: string
    name: string
    message: string
}

interface ReqApiProps extends NextApiRequest {
    body: BodyEnterty
}

const hander = async (req: ReqApiProps, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, message, name } = req.body

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' })
            return
        }

        // Store it in a database
        const newMessage: { [key: string]: any } = { email, name, message }

        let client

        try {
            client = await MongoClient.connect(
                'mongodb+srv://catsriver:zhenxi@cluster0.o61fatb.mongodb.net/?retryWrites=true&w=majority'
            )
        } catch (err) {
            res.status(500).json({ message: 'Could not connect to database.' })
            return
        }

        const db = client.db('my-site')

        try {
            const result = await db.collection('messages').insertOne(newMessage)
            newMessage.id = result.insertedId
        } catch (err) {
            client.close()
            res.status(500).json({ message: 'Storing message failed.' })
            return
        }

        client.close()

        res.status(201).json({
            message: 'Successfully stored message!',
            data: newMessage
        })
    }
}

export default hander
