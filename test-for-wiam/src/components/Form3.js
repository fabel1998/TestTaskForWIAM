import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfirmationModal } from './ConfirmationModal';


export const Form3 =({ formData }) => {
    const [form3Data, setForm3Data] = useState({
        loanAmount: formData.loanAmount || 200,
        loanTerm: formData.loanTerm || 10,
    })

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm3Data((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://dummyjson.com/products/add',{
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    title: `${formData.firstName} ${formData.lastName}`,
                })
            }).then(res => {res.json()})
            fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  title: `${formData.firstName} ${formData.lastName}`,
                })
              })
              .then(res => res.json())
              .then(console.log)
              .then(() => {
                setModalMessage(`Поздравляем, ${formData.firstName} ${formData.lastName}! Вам одобрено ${form3Data.loanAmount}$ на ${form3Data.loanTerm} дней.`);
                setShowModal(true);
            })
            .catch(err => console.log('Ошибка отправки формы',err))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="loanAmount" className="form-label">Сумма кредита</label>
                    <input
                        type='range'
                        name="loanAmount"
                        className="form-range"
                        id="loanAmount"
                        min="200"
                        max="1000"
                        step="100"
                        value={form3Data.loanAmount}
                        onChange={handleChange}
                        required
                    />
                    <div>{form3Data.loanAmount}$</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="loanTerm" className="form-label">Срок займа (дни)</label>
                    <input
                        type='range'
                        name="loanTerm"
                        className="form-range"
                        id="loanTerm"
                        min="10"
                        max="30"
                        step="1"
                        value={form3Data.loanTerm}
                        onChange={handleChange}
                        required
                    />
                    <div>{form3Data.loanTerm} дней</div>
                </div>
                <button type="submit" className="btn btn-primary">Подать заявку</button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/form2')}>Назад</button>
            </form>
            <ConfirmationModal show={showModal} onClose={() => setShowModal(false)} message={modalMessage} />
        </div>
    )


}