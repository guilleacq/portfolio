import PropTypes from 'prop-types';
import { Search, X } from 'lucide-react';

/**
 * Search input component with icon
 */
const SearchInput = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <div className="search-container">
      <Search className="search-icon" size={18} strokeWidth={1.5} />
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search articles"
      />
      {value && (
        <button
          className="search-clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          <X size={16} strokeWidth={2} />
        </button>
      )}
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchInput;
