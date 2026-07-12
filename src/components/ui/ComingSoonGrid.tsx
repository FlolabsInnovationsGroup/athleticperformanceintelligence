import Image from "next/image";

type ComingSoonProduct = {
  name: string;
  image: string;
};

export function ComingSoonGrid({ products }: { products: ComingSoonProduct[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
      {products.map((product) => (
        <figure key={product.name} className="space-y-3">
          <div className="aspect-[16/9] overflow-hidden rounded-xl border border-card-border bg-muted/40 shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={450}
              unoptimized
              className="h-full w-full object-contain"
            />
          </div>
          <figcaption className="text-base font-semibold text-foreground">
            {product.name}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
