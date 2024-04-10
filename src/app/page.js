import Image from "next/image";
import Link from "next/link";
import image from "./image/openai.webp";
import("./index.css");

export default function Home() {
  return (
    <>
      <div className="main-div">
        <Image src={image} alt="OpenAI" width={100} height={100} />
        <h1 className="main-title1">Image Generate Through Prompt Using OpenAI</h1>
        <Link className="main-link" href="/ImageGenerator">
          {" "}
          Open Image Generator{" "}
        </Link>
      </div>
    </>
  );
}
