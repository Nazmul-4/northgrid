import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { privateCageService } from "@/constants/siteData";

export const metadata: Metadata = {
  title: "Private Cage Colocation | NorthGrid Data Centers",
  description: privateCageService.description,
};

export default function PrivateCagePage() {
  return <ServiceDetailTemplate service={privateCageService} />;
}