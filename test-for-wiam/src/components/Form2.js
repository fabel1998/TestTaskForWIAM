import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Form2 =({ formData, setFormData }) => {
    const [form2Data, setForm2Data] = useState(formData || {
        workPlace: formData.workPlace || '',
        address: formData.address || '',
    })

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
          .then(res => res.json())
          .then(data => {
            if (Array.isArray(data)) {
                setCategories(data)
            }})
          .catch(err => console.log('Ошибка запроса категорий',err))
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm2Data((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({...formData, ...form2Data});
        navigate('/form3');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="workPlace" className="form-label">Место работы</label>
                <select
                    name="workPlace"
                    className="form-control"
                    id="workPlace"
                    value={form2Data.workPlace}
                    onChange={handleChange}
                    placeholder="8(XXX)XXX-XX-XX"
                    required
                >
                    <option value=''>Выберите место работы</option>
                    {categories.length > 0 && categories.map((category, index) => (
                        <option key={index} value={category.name}>{category.name}</option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="address" className="form-label">Адрес проживания</label>
                <input
                    type="text"
                    name="address"
                    className="form-control"
                    id="address"
                    value={form2Data.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Далее</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/form1')}>Назад</button>        
        </form>
    )
}