import Image from "next/image";
import { CategorySlug } from "@/lib/types";
import { PlaceholderArt } from "./placeholder-art";

interface ProductImageProps {
  image?: string;
  gradient: [string, string];
  icon: CategorySlug;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ProductImage({
  image,
  gradient,
  icon,
  alt,
  className,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  priority,
}: ProductImageProps) {
  if (image) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className ?? ""}`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return <PlaceholderArt icon={icon} gradient={gradient} label={alt} className={className} />;
}
