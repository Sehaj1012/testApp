import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex flex-col text-blue-500 underline">
      <Link href={"/login"} className="cursor:pointer" >
        Login
      </Link>
      <Link href={"/register"} className="cursor:pointer">
        Register
      </Link>
      <button >test</button>
    </main>
  );
}
