export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex gap-5">
        <aside className="w-1/4"></aside>
        <section className="w-3/4 space-y-3">
          <div class="flex items-center justify-center w-100 mt-5">
            <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
