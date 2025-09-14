import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Experience",
  description:
    "Book your unforgettable Nazaré big wave experience. Choose your preferred date and let us create the perfect adventure for you.",
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
