import { Button } from "@/components/ui/button";
import { font, getUser } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - Zebib",
};

const NotFound = async () => {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="wrapper py-12">
          <h2 className="text-4xl font-bold">Page Not Found</h2>
          <p className="text-2xl opacity-80 text-amber-700">ገጹ አልተገኘም</p>
          <p>
            <Link href="/">
              <Button variant={"link"} className="">
                Back to Home
              </Button>
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
};
export default NotFound;
