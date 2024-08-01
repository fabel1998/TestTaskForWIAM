import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form1 =({ formData, setFormData }) => {
    const [form1Data, setForm1Data] = useState(formData || {
        phone: formData.phone || '',
        firstName: formData.firstName || '',
        lastName: formData.lastName || '',
        gender: formData.gender || '',
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm1Data({
            ...form1Data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ ...formData, ...form1Data});
        navigate('/form2');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Телефон</label>
                <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    id="phone"
                    value={form1Data.phone}
                    onChange={handleChange}
                    placeholder="8(XXX)XXX-XX-XX"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Имя</label>
                <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    id="firstName"
                    value={form1Data.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Фамилия</label>
                <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    id="lastName"
                    value={form1Data.lastName}
                    onChange={handleChange}
                    required
                />
                
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Пол</label>
                <select
                    name="gender"
                    className="form-control"
                    id="gender"
                    value={form1Data.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Выберите пол</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option> 
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Далее</button>
        </form>
    )
}