import ContentWrapper from "@/components/ContentWrapper";
import SearchFieldHeaderComponent from "@/components/SearchFieldHeaderComponent";
import SearchInputComponent from "@/components/SearchInputComponent";

export default function Home() {
  return (
    <ContentWrapper className="flex justify-center items-center">
      <div className="">
        {/* Information component */}
        <SearchFieldHeaderComponent />
        {/* search field component */}
        <SearchInputComponent />
      </div>
    </ContentWrapper>
  );
}
