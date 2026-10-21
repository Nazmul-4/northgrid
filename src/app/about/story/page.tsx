import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { companyStoryService } from "@/constants/siteData";

export const metadata: Metadata = {
  title: "About Us | NorthGrid Data Centers",
  description: companyStoryService.description,
};

export default function AboutStoryPage() {
  return <ServiceDetailTemplate service={companyStoryService} />;
}