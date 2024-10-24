import React from "react";
import Page from "../../_components/Pages";
import { SDeal } from "@/app/schemas/Deal.schemas";
import Image from "next/image";
import Button from "../../_components/Button";

const deal: SDeal<true> = {
  id: 111,
  title: "벤츠 아주 싸게 합니다",
  imgUrl:
    "https://img.kr.gcp-karroter.net/origin/article/202410/8a24708778b8dac90c12de8b37fa0b7bf4f822fb490189dcc67868c736b004d9_0.webp?f=webp&q=95&s=1440x1440&t=inside",
  location: "서울 강동구",
  price: 50000,
  likesCount: 22,

  seller: {
    avatarImgURL:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png",
    email: "tjdrn4657@naver.com",
  },
  content: "벤츠가 너무 싼데 아무도 안사가면 전 슬퍼요 ㅠ",
  createdAt: 1719388055073,
  viewsCount: 123123,
};

function DealDetailPage() {
  return (
    <Page title={deal.title} isTitleHidden width="sm">
      <div className="relative aspect-square">
        <Image
          alt={deal.title}
          src={deal.imgUrl}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div>
        <div>{deal.seller?.email}</div>
      </div>

      <h2>{deal.title}</h2>

      <div>{deal.createdAt}</div>

      <div>{deal.price}</div>

      <div>{deal.content}</div>

      <div>{deal.likesCount}</div>
      <div>{deal.viewsCount}</div>

      <div>
        <Button>찜하기</Button>
        <Button intent="danger">취소하기</Button>
        <Button>글 수정하기</Button>
        <Button intent="danger">글 삭제하기</Button>
      </div>
    </Page>
  );
}

export default DealDetailPage;
