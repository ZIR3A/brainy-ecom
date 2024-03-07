import SearchFieldHeaderComponent from "@/components/SearchFieldHeaderComponent";
import SearchInputComponent from "@/components/SearchInputComponent";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="">
        <SearchFieldHeaderComponent />
        <SearchInputComponent />
      </div>
    </main>
  );
}
