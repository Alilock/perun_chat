import React from 'react'

const MyMessage = () => {
    return (
        <div class="flex gap-2.5 justify-end pb-40">
            <div class="">
                <div class="grid mb-2">
                    <h5 class="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">You</h5>
                    <div class="px-3 py-2 bg-indigo-600 rounded">
                        <h2 class="text-white text-sm font-normal leading-snug">Yes, let’s see, send your work here</h2>
                    </div>
                    <div class="justify-start items-center inline-flex">
                        <h3 class="text-gray-500 text-xs font-normal leading-4 py-1">05:14 PM</h3>
                    </div>
                </div>
                <div class="justify-center">
                    <div class="grid w-fit ml-auto">
                        <div class="px-3 py-2 bg-indigo-600 rounded ">
                            <h2 class="text-white text-sm font-normal leading-snug">Anyone on for lunch today</h2>
                        </div>
                        <div class="justify-start items-center inline-flex">
                            <h3 class="text-gray-500 text-xs font-normal leading-4 py-1">You</h3>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://pagedone.io/asset/uploads/1704091591.png" alt="Hailey image" class="w-10 h-11" />
        </div>
    )
}

export default MyMessage
