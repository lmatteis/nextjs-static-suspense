import { Suspense } from "react";
import Data from "../components/Data";

export const dynamic = "force-static";

export default async function Page() {
  return (
    <div className="mt-8 rounded-lg bg-gray-800 p-4">
      <h2 className="mb-2 text-lg font-semibold text-gray-300">Foo</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Data />
      </Suspense>
      Done!
    </div>
  );
}
