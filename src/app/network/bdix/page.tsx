import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { bdixPeeringService } from "@/constants/siteData";

export const metadata: Metadata = {
  title: "BDIX Peering | NorthGrid Data Centers",
  description: bdixPeeringService.description,
};

export default function BdixPeeringPage() {
  return <ServiceDetailTemplate service={bdixPeeringService} />;
}