"use client";

import {Breadcrumbs} from "@vx-oss/heroui-v3-react";

export default function BreadcrumbsLevel2() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item>Current Page</Breadcrumbs.Item>
    </Breadcrumbs>
  );
}
