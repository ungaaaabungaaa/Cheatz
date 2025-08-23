import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hidden lg:block w-full py-4 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <small className="text-gray-400 dark:text-gray-600 text-xs">
          By messaging Exams.Sucks, you agree to our{" "}
          <Link className=" underline cursor-pointer" href="/terms">
            Terms
          </Link>{" "}
          and have read our{" "}
          <Link className="cursor-pointer underline" href="/privacy">
            Privacy Policy
          </Link>
        </small>
      </div>
    </footer>
  );
}
