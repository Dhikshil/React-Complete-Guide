

export default function Input({fieldValues, handleChange}) {

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          {Object.entries(fieldValues).map(([ label, value ]) => (
            <div key={label}>
              <label>{label}</label>
              <input 
              type="number" 
              value={value} 
              onChange={(e) => handleChange(e, label)} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
)};