import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { auth, realTimeDB } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Header = () => {
    const [user] = useAuthState(auth)
    const [typings, setTypings] = useState([])
    useEffect(() => {
        const typingRef = ref(realTimeDB, 'typing')
        const unsubscribe = onValue(typingRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                const typingUsers = Object.values(data)
                const filteredTypingUsers = typingUsers.filter((typingUser) => typingUser.uid !== user.uid)
                setTypings(filteredTypingUsers)
            }
            else {
                setTypings([])
            }
        })
        return () => unsubscribe()
    }, [])



    return (
        <div class="w-full h-16 fixed top-0 bg-white flex items-center justify-between px-8 border-b border-gray-200">
            <div class="flex items-center gap-4">
                <h1 class="text-lg font-semibold text-gray-900">Chat</h1>
            </div>
            <div class="flex items-center gap-2">
                {typings.map((typingUser) => {

                    return (
                        <h1 class="text-xs font-normal text-gray-500">{typingUser.name} ,</h1>
                    )
                })}
                {typings.length > 0 && <h1 class="text-xs font-normal text-gray-500">typing...</h1>}

            </div>
        </div>
    )
}

export default Header
