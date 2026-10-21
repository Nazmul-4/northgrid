import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import StarlinkSelector from "@/components/sections/StarlinkSelector";
import { starlinkHardwareService } from "@/constants/siteData";

export const metadata: Metadata = {
  title: "Starlink Hardware | NorthGrid Data Centers",
  description: starlinkHardwareService.description,
};

export default function StarlinkHardwarePage() {
  return (
    <ServiceDetailTemplate service={starlinkHardwareService}>
      <StarlinkSelector />
    </ServiceDetailTemplate>
  );
}