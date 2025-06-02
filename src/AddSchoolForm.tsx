import { useState } from 'react';
import { supabase } from './supabaseClient';

function AddSchoolForm() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    county: '',
    country: '',
    school_link: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');

    // Basic validation for required fields
    if (!formData.name || !formData.city || !formData.state) {
      setStatus('Please enter school name, city, and state — all are required.');
      return;
    }

    const { error } = await supabase.from('schools').insert([
      {
        ...formData,
        is_verified: false
      }
    ]);

    if (error) {
      if (error.code === '23505') {
        setStatus('⚠️ A school with this name, city, and state already exists.');
      } else {
        setStatus(`❌ Error: ${error.message}`);
      }
    } else {
      setStatus('✅ School added successfully!');
      setFormData({ name: '', city: '', state: '', county: '', country: '', school_link: '' });
    }
  };

  return (
    <form className="add-school-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="School Name *"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City *"
        required
        value={formData.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="state"
        placeholder="State *"
        required
        value={formData.state}
        onChange={handleChange}
      />
      <input
        type="text"
        name="county"
        placeholder="County"
        value={formData.county}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
      />
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
