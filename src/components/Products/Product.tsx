import type { Product } from "@/db";
import Image from "next/image";

const Product  = ({product}: {product:Product})  => {
    return  (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200
            lg:aspect-none group-hover:opacity-75
            lg:h-80">
                <Image
                    src={product.imageId}
                    alt="image" 
                    className="h-full w-full object-cover object-center"
                    width={100}
                    height={100}
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        {product.name}
                        <p className="mt-1 text-sm text-gray-500">
                            Size {product.size.toUpperCase()}, {product.color}
                        </p>
                    </h3>
                </div>

                <p className="text-sm font-medium text-gray-900">
                    {product.price}
                </p>
            </div>
        </div>
    )
}

export default Product;