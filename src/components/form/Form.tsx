import { useState, FormEvent } from 'react';
import { countries } from '../data/countries';
import { SearchType } from '../../types';
import styles from './Form.module.css'
import Alert from '../Alert/Alert';

type FormProps = {
  readonly fetchWeather: (search: SearchType) => void
}

export default function Form({fetchWeather}: FormProps) {

  const [search, setSearch] = useState<SearchType>({
    city: '',
    country: ''
  })
  const [alert, setAlert] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(search).includes('')) {
      setAlert('...Consultando')
    }
    fetchWeather(search)
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      {alert && <Alert>{alert}</Alert>}
      {}
      <div className={styles.field}>
        <label htmlFor="city">Ciudad</label>
        <input
          id='city'
          type='text'
          name='city'
          placeholder='Ciudad'
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">País:</label>
        <select
          id="country"
          name="country"
          value={search.country}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un pais --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input className={styles.submit} type="submit" value="Consultar Clima" />

    </form>
  )
}
