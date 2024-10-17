import Link from "next/link";
import Nav from "../components/Nav"

export default function Country() {
    return (
        <div>
            <Nav />
            <div>
                <h1 className="text-center text-2xl bg-green-400"><b>Country List</b></h1>
                <ul className="text-center">
                    <li><Link href="/country/canada" className="text-2xl font-bold"><b>Canada</b></Link></li>
                    <li><Link href="/country/pakistan" className="text-2xl font-bold"><b>Pakistan</b></Link></li>
                    <li><Link href="/country/india" className="text-2xl font-bold"><b>India</b></Link></li>
                    <li><Link href="/country/brazil" className="text-2xl font-bold"><b>Brazil</b></Link></li>
                    <li><Link href="/country/australia" className="text-2xl font-bold"><b>Australia</b></Link></li>
                </ul>
            </div>
        </div>
    )
}