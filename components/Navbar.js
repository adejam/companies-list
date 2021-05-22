import Link from 'next/link';

const Navbar = () => {
    return ( 
        <header>
            <nav>
                <div className="brand"><h1>Companies List</h1></div>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/companies"><a>Companies List</a></Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navbar;