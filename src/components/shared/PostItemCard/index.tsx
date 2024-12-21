import {PostType} from "@/types/Post";
import Link from "next/link";
import {toShamsiDate} from "@/lib/date";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";

type PropsType = {
    post: PostType;
};

export const PostItemCard = ({post}: PropsType) => {
    const {title, view, created_at} = post;

    return (
        <div className="border rounded-lg p-2 md:p-4 shadow-sm">
            <Link href={`/posts/${post?.slug}`}>
                <h1 className="text-gray-700 font-black">{title}</h1>
            </Link>

        <div className="flex items-center gap-3 mt-4">
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

        </div>
    )
}