import Navbar from "@/components/Navbar";
import { createCheckoutLink, createCustomerIfNull, hasSubscription } from "@/lib/stripe";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const customer = await createCustomerIfNull();
  const hasSub = await hasSubscription();
  console.log(hasSub ? "yes has sub" : "no, sub")
  console.log(customer);

  const checkoutLink = await createCheckoutLink(String(customer))
  console.log(checkoutLink)
  return (
    <div className="">
      <Navbar />
      <div className="max-w-5xl m-auto w-full px-4">{children}</div>
    </div>
  );
}