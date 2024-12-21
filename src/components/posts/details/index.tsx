import {
    MdOutlineCalendarMonth,
    MdOutlineRemoveRedEye,
    MdOutlinePerson,
    MdInsertComment,
} from "react-icons/md";
import {PostDetailsType} from "@/types/Post";
import {toShamsiDate} from "@/lib/date";

type PropsType = {
    post: PostDetailsType;
}

export default function PostDetails(post: PropsType) {
    const {title, body, view, created_at, user, comments} = post.post[0];

    return (
        <div>
            {/* post title */}
            <h1 className="text-gray-700 font-black text-lg">{title}</h1>

            {/* post view - post created_at */}
            <div className="flex items-center gap-2 mt-4">
                {/* post user */}
                <div className="flex items-center gap-1 text-xs text-gray-500">
                <span>
                    <MdOutlinePerson className="w-4 h-4"/>
                </span>
                    <p>{user?.name}</p>
                </div>
                {/* post view */}
                <div className="flex items-center gap-1 text-xs text-gray-500">
                <span>
                    <MdOutlineRemoveRedEye className="w-4 h-4"/>
                </span>
                    <p>{view}</p>
                </div>
                {/* post created_at */}
                <div className="flex items-center gap-1 text-xs text-gray-500">
                <span>
                    <MdOutlineCalendarMonth className="w-4 h-4"/>
                </span>
                    <p>{toShamsiDate(created_at)}</p>
                </div>
            </div>

            {/* post body */}
            <p className="mt-4 text-justify">{body}</p>

            {/* post comments */}
            <div className="mt-4">
                <div className="flex items-center gap-1">
                    <MdInsertComment className="w-5 h-5" />
                    <h4 className="font-semibold">دیدگاه ها</h4>
                </div>
                <div className="flex flex-col gap-4">
                    {comments?.map((comment)=> (
                        <div
                            key={comment?.id}
                            className="mt-2 border rounded-lg p-4 shadow-md"
                        >
                            <p className="text-sm text-justify">{comment?.body}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}