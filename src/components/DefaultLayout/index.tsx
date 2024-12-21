import Header from "@/components/DefaultLayout/Header";
import Footer from "@/components/DefaultLayout/Footer";

interface PropsType {
    children?: React.ReactNode;
}

export default function DefaultLayout({ children }: PropsType) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="container p-4 flex-1">{children}</main>
            <Footer />
        </div>
    )
}