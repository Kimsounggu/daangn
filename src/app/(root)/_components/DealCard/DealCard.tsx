"use client";
import { SDeal } from "@/app/schemas/Deal.schemas";
import Image from "next/image";
interface DealCardProps {
  deal: SDeal;
}

function DealCard({ deal }: DealCardProps) {
  const { title, imgUrl, price, location, likesCount } = deal;

  return (
    <div>
      <div className="relative aspect-square">
        <Image src={imgUrl} alt={title} fill className="object-cover" />
      </div>
      <h6 className="">{title}</h6>
      <div className="font-bold">{price}원</div>
      <div className="text-[10px] font-bold">{location}</div>
      <div className="text-[8px]">관심 {likesCount}</div>
    </div>
  );
}

export default DealCard;
