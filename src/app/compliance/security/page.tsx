import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { securityStandardsService } from "@/constants/siteData";

export const metadata: Metadata = {
  title: "Security Standards | NorthGrid Data Centers",
  description: securityStandardsService.description,
};

export default function SecurityStandardsPage() {
  return <ServiceDetailTemplate service={securityStandardsService} />;
}