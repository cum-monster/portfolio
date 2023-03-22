import Link from "next/link";
export default function Footer() {
  return (
    <div className="max-w-screen-xl px-4 py-12 mx-auto mt-auto space-y-8 overflow-hidden sm:px-6 lg:px-3 ">
      <p className="mt-8 text-base leading-6 text-center text-neutral-200">
        © {new Date().getFullYear()} xsomenoob
      </p>
    </div>
  );
}
