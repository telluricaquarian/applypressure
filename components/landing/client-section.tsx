export default function ClientSection() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Proudly Serving These Sydney Suburbs
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-lg font-medium text-gray-800 dark:text-gray-200">
              <li>Oatlands</li>
              <li>Parramatta</li>
              <li>Ryde</li>
              <li>Northmead</li>
              <li>Baulkham Hills</li>
              <li>Westmead</li>
              <li>Castle Hill</li>
              <li>Pennant Hills</li>
              <li>Carlingford</li>
              <li>Winston Hills</li>
              <li>Sydney-Wide available when inquired</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
