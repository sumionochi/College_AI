import Navbar from "@/components/Navbar";
import { createCheckoutLink, createCustomerIfNull, hasSubscription } from "@/lib/stripe";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="max-w-5xl m-auto w-full px-42 text-primary">{children}</div>
    </div>
  );
}