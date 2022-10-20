interface HeaderComponentProps {
  handleReset: () => void;
  handleInputChange: (evt: any ) => void
  searchInputValue: string
}

const HeaderComponent = ({ handleReset, handleInputChange, searchInputValue }: HeaderComponentProps) => {
  return (
    <div id="header-container">
      <div className="header-wrapper">
        <span className="header">MULTIVERSUS</span>
      </div>
      <div className="btn-wrapper">
        <button id="reset-row" className="btn btn-new" onClick={handleReset}>
          <span>RESET ROWS</span>
        </button>
      </div>
      <div className="input-wrapper">
        <input
          id="input-field-character"
          type="text"
          className="input-filter-project"
          placeholder="Search for character..."
          value={searchInputValue}
          onChange={handleInputChange}      
        />
      </div>
    </div>
  );
};
export default HeaderComponent;
