






const PostCard = ({ item }) => {

    return (
        <div className="p-2 bg-white rounded-sm m-2">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={item?.image} alt="Food Image" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{item?.firstName} {item?.lastName}</div>
                    <p class="text-gray-700 text-base">
                        {item?.writeup}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={item?.avatar} alt="Avatar" />
                </div>
            </div>
        </div>
    )
}


export default PostCard