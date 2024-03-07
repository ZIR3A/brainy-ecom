const CheckboxInput = ({ label, type="checkbox" }) => {
  return (
    <div class="flex items-center mb-4">
      <input id="default-checkbox" type={type} value="" class="w-4 h-4 bg-gray-100 border-[#BDBDBD] rounded-xl focus:ring-[#5676FF]" />
      <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
