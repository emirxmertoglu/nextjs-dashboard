import { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import { CustomerRaw } from "@/app/lib/definitions";

export const metadata: Metadata = {
  title: "Customers",
};

async function fetchCustomers() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch customers.");
  }
}

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <div>
      <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      <ul>
        {customers.map((customer: CustomerRaw) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}
