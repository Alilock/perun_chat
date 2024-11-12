import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Message = ({ message }) => {
    const [user] = useAuthState(auth)
    return (
        <>
            {message.senderId !== user.uid ? <div class="grid ">
                <div class="flex gap-2.5 mb-4">
                    <img
                        src={message.avatar}
                        alt="useravatar" class="w-10 h-11" />
                    <div class="grid">
                        <h5 class="text-gray-900 text-sm font-semibold leading-snug pb-1">{message.name}</h5>
                        <div class="w-max grid">
                            <div class="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
                                <h5 class="text-gray-900 text-sm font-normal leading-snug">{message.text}</h5>
                            </div>
                            <div class="justify-end items-center inline-flex mb-2.5">
                                <h6 class="text-gray-500 text-xs font-normal leading-4 py-1">05:14 PM</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div class="flex gap-2.5 justify-end ">
                <div class="">
                    <div class="grid mb-2">
                        <h5 class="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">{message.name}</h5>
                        <div class="px-3 py-2 bg-indigo-600 rounded">
                            <h2 class="text-white text-sm font-normal leading-snug">{message.text}</h2>
                        </div>
                        <div class="justify-start items-center inline-flex">
                            <h3 class="text-gray-500 text-xs font-normal leading-4 py-1">05:14 PM</h3>
                        </div>
                    </div>
                </div>
                <img src={message.avatar} alt="userImage" class="w-10 h-11" />
            </div>}
        </>
    )
}

export default Message
