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

import type { Metadata } from "next";

// export const revalidate = 60;

interface IIdProps {
    params: Promise<{ id:String }>
};

async function fetchData(id: String){

    const response = await fetch(
        `https://dummyjson.com/products/${id}`
    );

    const data: Product =
        await response.json();

    return data;
}

export async function generateMetadata({params}:IIdProps): Promise<Metadata> {
    const {id} = await params;
    
    const data = await fetchData(id);

    return {
        title: `${data.title} | Product`,
        description: `Product is ${data.title}.It's price is ${data.price}.`
    }
    
}

export default async function ProductsPage({ params }: IIdProps) {

    const { id } = await params;
    
    const data = await fetchData(id);

    console.log(data, "====data");

    return (
        <main>
            <h1>Products</h1>

            
                <div>
                    <h2>{data.title}</h2>
                    <p>${data.price}</p>
                </div>
       
        </main>
    );
}