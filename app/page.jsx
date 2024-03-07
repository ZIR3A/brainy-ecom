import ContentWrapper from "@/components/ContentWrapper";
import SearchFieldHeaderComponent from "@/components/SearchFieldHeaderComponent";
import SearchInputComponent from "@/components/SearchInputComponent";

export default function Home() {
  return (
    <ContentWrapper className="flex bg-slate-50 justify-center items-center">
      <div className="">
        <SearchFieldHeaderComponent />
        <SearchInputComponent />
      </div>
    </ContentWrapper>
  );
}