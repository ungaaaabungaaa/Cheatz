"use client";

import { useParams } from "next/navigation";

export default function JobsDynamicPage() {
  const params = useParams();
  const slug = params.slug as string; // use as {slug} in the ui

  return <></>;
}
