type TodoFilterProps = {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onClear: () => void;
  inputValue: string;
};

export const TodoFilter = ({
  onChange,
  onClear,
  inputValue,
}: TodoFilterProps) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select data-cy="statusSelect" name="searchSelect" onChange={onChange}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        name="searchInput"
        value={inputValue}
        onChange={onChange}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {
        inputValue
        && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={onClear}
            />
          </span>
        )
      }
    </p>
  </form>
);