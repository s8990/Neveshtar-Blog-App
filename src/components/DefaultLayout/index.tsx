import Header from "@/components/DefaultLayout/Header";
import Footer from "@/components/DefaultLayout/Footer";

interface PropsType {
    children?: React.ReactNode;
}

export default function DefaultLayout({ children }: PropsType) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}