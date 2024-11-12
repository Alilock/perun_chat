import React, { useEffect, useState } from 'react'
import SendMessage from '../components/SendMessage'
import Message from '../components/Message'
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

const ChatBox = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('createAt'), limit(100))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedMessages = []
            querySnapshot.forEach((doc) => {

                fetchedMessages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(fetchedMessages)
        })
        return () => unsubscribe()
    }, [])


    return (
        <div class="w-full h-screen p-8 flex flex-col justify-between ">
            <div>
                {
                    messages.map((message) => {
                        return <Message key={message.id} message={message} />
                    })
                }
            </div>

            <SendMessage />
        </div>
    )
}

export default ChatBox
