import IconInput from "../common/IconInput";

export default function Search(props) {
  const { search, setSearch } = props;

  function onChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="search--box">
      <IconInput name={"search"} value={search} onChange={onChange} />
    </div>
  );
}
