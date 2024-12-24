import React from "react";

export default async function Campaign({ params }: { params: any }) {
  const { campaign } = await params;
  return <div>{campaign}</div>;
}
