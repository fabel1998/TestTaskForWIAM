import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div>
                <NavLink className="navbar-brand" to="/form1">Кредитная форма</NavLink>
            </div>
        </nav>
    )
}