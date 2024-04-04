import {data} from "../utils/data.js";
import { RenderChart } from "@/components/RenderChart.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">

      <h2>Entity Compass beta version</h2>
      <RenderChart data={data} />
    </main>
  );
}
