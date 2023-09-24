import Link from 'next/link';


export const Header:React.FC = () => {
    return (
    <div>
        <Link href="/">Home   </Link>
        <Link href="/design">Design   </Link>
    </div>
    );
}