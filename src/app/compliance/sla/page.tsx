import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { uptimeSlaService } from "@/constants/siteData";

export const metadata: Metadata = {
  title: "Uptime SLA | NorthGrid Data Centers",
  description: uptimeSlaService.description,
};

export default function UptimeSlaPage() {
  return <ServiceDetailTemplate service={uptimeSlaService} />;
}