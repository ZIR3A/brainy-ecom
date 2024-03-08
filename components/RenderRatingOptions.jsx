const RenderRatingOptions = ({ limit = 1, length }) => {
  return [...new Array(limit)]?.map((_rate, _index) => {
    return <i className={`fa-solid fa-star  ${_index <= length ? "text-[#E27C00]" : "text-graylight"}`} suppressHydrationWarning />;
  });
};
export default RenderRatingOptions;
