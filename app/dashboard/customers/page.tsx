import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

async function fetchCustomers() {
  try {
    console.log("started to fetch customers");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("finished fetching customers in 3 seconds");
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
      <h1 className="text-3xl text-blue-500">Customers</h1>
      <ul>
        {customers.map((customer: any) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}
