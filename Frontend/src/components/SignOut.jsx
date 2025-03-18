import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const SignOut = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found!");
                navigate("/");
                return;
            }

            try {
                await fetch("http://localhost:8080/GrahSeva/logout", { 
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                localStorage.removeItem("token"); 
                sessionStorage.removeItem("token");
                
                navigate("/"); // Redirect after logout
            } catch (error) {
                console.error("Logout error:", error);
            }
        };

        handleLogout();
    }, []);

    return <h2>Logging out...</h2>;
};


export default SignOut;
