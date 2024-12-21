import Link from "next/link";

export default function Header({}) {
    return (
        <div className="bg-colorPrimary text-colorPrimaryForeground">
            <div className="container flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="p-4">
                    <Link href="/">
                        <h6 className="font-semibold text-lg">نوشتار</h6>
                    </Link>
                </div>

                <ul className="sm:flex-1 sm:flex sm:flex-row sm:items-center">
                    <li>
                        <Link href="/" className="inline-block w-full p-4 hover:bg-colorPrimaryDarker">
                            پست ها
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/add-post" className="inline-block w-full p-4 hover:bg-colorPrimaryDarker">
                            افزودن پست
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}