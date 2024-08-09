"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="-mt-60 flex flex-col items-center justify-center gap-4">
        <div className="text-3xl text-red-500">Error</div>
        <p>{error.message}</p>
        <button
          className="border border-blue-500 p-3 rounded"
          onClick={() => reset()}
        >
          Try Again!
        </button>
      </div>
    </div>
  );
}
