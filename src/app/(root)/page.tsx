import React from "react";
import DealCard from "./_components/DealCard";
import Page from "./_components/Pages";
import { SDeal } from "../schemas/Deal.schemas";
import Link from "next/link";

function HomePage() {
  const deal: SDeal = {
    id: 111,
    title: "벤츠 아주 싸게 합니다",
    imgUrl:
      "https://img.kr.gcp-karroter.net/origin/article/202410/8a24708778b8dac90c12de8b37fa0b7bf4f822fb490189dcc67868c736b004d9_0.webp?f=webp&q=95&s=1440x1440&t=inside",
    location: "서울 강동구",
    price: 50000,
    likesCount: 22,
  };

  return (
    <Page title="전체 판매글">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <Link href={"/deals/${deal.id}"}>
                <DealCard deal={deal} />
              </Link>
            </li>
          ))}
      </ul>
    </Page>
  );
}

export default HomePage;
