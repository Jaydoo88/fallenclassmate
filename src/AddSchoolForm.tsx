import { useState } from 'react';
import { supabase } from './supabaseClient';
import './AddSchoolForm.css';

const countries = [
  '', 'USA', 'Canada', 'United Kingdom', 'Germany', 'France', 'Italy', 'Australia',
  'Japan', 'South Korea', 'Mexico', 'India', 'Brazil', 'Philippines', 'Spain'
];

const usStates = [
  '', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming'
];

function AddSchoolForm() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    county: '',
    country: '',
    school_link: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    city: false,
    state: false,
    country: false
  });

  const [status, setStatus] = useState('');

  const isUSorCanada = formData.country === 'USA' || formData.country === 'Canada';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');

    if (!formData.name || !formData.city || !formData.country || (isUSorCanada && !formData.state)) {
      setErrors({
        name: !formData.name,
        city: !formData.city,
        country: !formData.country,
        state: isUSorCanada && !formData.state
      });
      setStatus("⚠️ Please fill all required fields.");
      return;
    }

    const { data: existing, error: checkError } = await supabase
      .from('schools')
      .select('*')
      .eq('name', formData.name)
      .eq('city', formData.city)
      .eq('state', formData.state);

    if (checkError) {
      setStatus(`⚠️ Error checking for duplicates: ${checkError.message}`);
      return;
    }

    if (existing && existing.length > 0) {
      setStatus("⚠️ A school with this name, city, and state already exists.");
      return;
    }

    const { error } = await supabase.from('schools').insert([
      {
        ...formData,
        is_verified: false
      }
    ]);

    if (error) {
      setStatus(`❌ Submission failed: ${error.message}`);
    } else {
      setStatus('✅ School added successfully!');
      setFormData({ name: '', city: '', state: '', county: '', country: '', school_link: '' });
      setErrors({ name: false, city: false, state: false, country: false });
    }
  };

  return (
    <form className="add-school-form" onSubmit={handleSubmit}>
      <input
        className={errors.name ? 'error' : ''}
        type="text"
        name="name"
        placeholder="School Name *"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className={errors.city ? 'error' : ''}
        type="text"
        name="city"
        placeholder="City *"
        value={formData.city}
        onChange={handleChange}
      />
      <select
        name="state"
        value={formData.state}
        onChange={handleChange}
        className={errors.state ? 'error' : ''}
      >
        <option value="">State {isUSorCanada ? '*' : '(Optional)'}</option>
        {usStates.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="county"
        placeholder="County"
        value={formData.county}
        onChange={handleChange}
      />
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className={errors.country ? 'error' : ''}
      >
        <option value="">Country *</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="school_link"
        placeholder="Website or Facebook Page"
        value={formData.school_link}
        onChange={handleChange}
      />
      <button type="submit">Submit School</button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}

export default AddSchoolForm;
