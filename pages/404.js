import Layout from "@/components/Layout";
import Image from "next/image";

export default function Custom404() {
  return (
    <Layout title="Page Not Found">
      <div className="container mx-auto flex py-8 items-center justify-center">
        <Image
          src="/404-ilustration.svg"
          width={600}
          height={600}
          alt="header"
          priority
        />
      </div>
    </Layout>
  );
}
