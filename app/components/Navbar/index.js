import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";

export default function Navbar({serachTerm, setSearchTerm}) {
  return (
    <>
      <div className="fixed z-70 top-0 w-full md:w-[100%] flex justify-between items-center py-4 px-3 bg-[#0757A7] text-white">
        <Link href="#" className="font-bold text-[1.5rem] md:text-[2rem]">
          Logo
        </Link>
        <div className="flex items-center gap-x-4">
          <span className="w-[10rem] md:w-[25rem] flex items-center justify-center rounded-xl border-1 px-2 border-[#cbcbcb]">
            <Search className="size-4 md:size-5" />
            <input
              placeholder=" Search Products"
              type="text"
              value={serachTerm}
              onChange={setSearchTerm}
              className="w-[90%] px-2 py-2 md:px-6 md:py-3 focus:outline-none focus:ring-[#cbcbcb] text-sm md:text-base"
            />
          </span>

          <Link
            href="#"
            className="flex gap-x-2 bg-[#002B60] px-4 py-3 rounded-xl font-medium"
          >
            <ShoppingCart />
            Cart
          </Link>
        </div>
      </div>
    </>
  );
}
