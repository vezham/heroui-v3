"use client";

import {Breadcrumbs} from "@vx-oss/heroui-v3-react";

export default function BreadcrumbsDisabled() {
  return (
    <Breadcrumbs isDisabled>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Products</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Electronics</Breadcrumbs.Item>
      <Breadcrumbs.Item>Laptop</Breadcrumbs.Item>
    </Breadcrumbs>
  );
}
