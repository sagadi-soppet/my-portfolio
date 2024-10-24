import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center align-middle">
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="text-center">
          <Link href={"/contacts"}>Contacts</Link>
        </div>
      </div>
    </div>
  );
}
