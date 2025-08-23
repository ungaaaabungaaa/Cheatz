"use client";

import { useParams } from "next/navigation";

export default function BlueprintDynamicPage() {
  const params = useParams();
  const slug = params.slug as string; // use as {slug} in the ui

  return <></>;
}
