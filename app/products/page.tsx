// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// export const dynamic = "force-dynamic";

// export default async function ProductsPage() {
//   const response = await fetch(
//     "https://dummyjson.com/products"
//   );

//   const data: { products: Product[] } = await response.json();

//   const time = new Date().toLocaleTimeString();
//   console.log('Where am I running?, server');


//   return (
//     <main>
//       <h1>Products</h1>

//       {data.products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.title}</h2>
//           <p>${product.price}</p>
//         </div>
//       ))}
//     </main>
//   );
// }



type Product = {
    id: number;
    title: string;
    price: number;
};

export const revalidate = 60;

export default async function ProductsPage() {
    const response = await fetch(
        "https://dummyjson.com/products"
    );

    const data: { products: Product[] } =
        await response.json();  

    return (
        <main>
            <h1>Products</h1>

            {data.products.slice(0, 5).map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                </div>
            ))}
        </main>
    );
}