function FilterInput(props) {
  return (
    <input
      className="input flex-grow inline-block mt-2 xs:last:ml-4 w-full xs:w-auto"
      type="number"
      placeholder={props.placeholder}
      value={props.value}
      onInput={(event) => props.setFilterValue(event.target.value)}
      data-testid={props.dataTestId}
    />
  );
}

export default FilterInput;