import Image from "next/image";
import Link from "next/link";
import { CarouselProps } from "react-responsive-carousel/lib/ts/components/Carousel/types";

function ProductCard() {
  return (
    <Link
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      href="/product/1"
    >
      <Image
        className="w=full"
        src="/product-1.webp"
        alt="Product image"
        height={400}
        width={400}
      />
      <div className="p-4 text-black">
        <h2 className="text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">$20.00</p>
          <p className="text-base  font-medium line-through"> $24.00</p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
