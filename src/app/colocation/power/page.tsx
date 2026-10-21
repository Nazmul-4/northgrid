import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { powerCoolingService } from "@/constants/siteData";

export const metadata: Metadata = {
  title: "Power & Cooling | NorthGrid Data Centers",
  description: powerCoolingService.description,
};

export default function PowerCoolingPage() {
  return <ServiceDetailTemplate service={powerCoolingService} />;
}