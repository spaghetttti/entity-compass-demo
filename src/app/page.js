import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h2>Entity Compass beta version</h2>
      <div className="p-4 flex justify-between gap-2">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/tangled-tree"
        >
          Tangled Tree
        </Link>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/collapsable-tree"
        >
          Collapsable Tree
        </Link>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/circle-packing"
        >
          Circle Packing
        </Link>
      </div>
    </main>
  );
}
