import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { dedicatedFiberService } from "@/constants/siteData";

export const metadata: Metadata = {
  title: "Dedicated Fiber | NorthGrid Data Centers",
  description: dedicatedFiberService.description,
};

export default function DedicatedFiberPage() {
  return <ServiceDetailTemplate service={dedicatedFiberService} />;
}