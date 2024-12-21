import Link from "next/link";

export default function Header({}) {
    return (
        <div className="bg-colorPrimary text-colorPrimaryForeground">
            <div className="container flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="p-4">
                    <Link href="#">
                        <h6 className="font-semibold text-lg">نوشتار</h6>
                    </Link>
                </div>

                <ul className="sm:flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
                    <li className="p-4 hover:bg-colorPrimaryDarker">
                        <Link href="#">
                            <p>پست ها</p>
                        </Link>
                    </li>
                    <li className="p-4 hover:bg-colorPrimaryDarker">
                        <Link href="#">
                            <p>افزودن پست</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}