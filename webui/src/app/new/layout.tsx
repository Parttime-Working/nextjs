"use client";

import React from "react";

// ref: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
