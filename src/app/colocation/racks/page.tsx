import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { rackSpaceService } from "@/constants/siteData";

export const metadata: Metadata = {
  title: "Rack Space Colocation | NorthGrid Data Centers",
  description: rackSpaceService.description,
};

export default function RackSpacePage() {
  return <ServiceDetailTemplate service={rackSpaceService} />;
}