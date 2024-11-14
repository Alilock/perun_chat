import React, { useEffect, useRef, useState } from 'react'
import SendMessage from '../components/SendMessage'
import Message from '../components/Message'
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import Header from '../components/Header'
import { requestForToken } from '../utils/helper'

const ChatBox = () => {

    const getToken = async () => {
        const permission = await Notification.requestPermission()
        if (permission == 'granted') {
            const token = await requestForToken()
            if (token) {
                console.log('Token', token);
            }
        }
    }

    useEffect(() => {
        getToken()
    }, [])


    const [messages, setMessages] = useState([])
    const ref = useRef()
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('createAt'), limit(100))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedMessages = []
            querySnapshot.forEach((doc) => {

                fetchedMessages.push({ ...doc.data(), id: doc.id })
            })
            ref.current.scrollIntoView({ behavior: 'smooth' })
            setMessages(fetchedMessages)
        })
        return () => unsubscribe()
    }, [])


    return (
        <div class="w-full h-screen px-8 flex flex-col justify-between ">
            <Header />
            <div className='flex flex-col gap-2 pb-20'>
                {
                    messages.map((message) => {
                        return <Message key={message.id} message={message} />
                    })
                }
            </div>
            <span ref={ref}></span>
            <SendMessage scroll={ref} />
        </div>
    )
}

export default ChatBox
