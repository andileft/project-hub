import React from 'react';

const FormInput = ({
  label,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  options,
  action,
  disabled
}) => (
  <div className="ph-field min-w-0">
    <div className="flex justify-between items-end gap-2">
      <label className="ph-field__label">{label}</label>
      {action}
    </div>
    {options ? (
      <select
        disabled={disabled}
        className="ph-select disabled:opacity-60"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    ) : (
      <input
        type={type}
        disabled={disabled}
        className="ph-input disabled:opacity-60"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
      />
    )}
  </div>
);

export default React.memo(FormInput);
