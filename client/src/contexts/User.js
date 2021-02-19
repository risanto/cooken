import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import host from '../host'

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({})

    const authenticate = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken')

            const { data } = await axios({
                method: 'get',
                url: `${host}/user`,
                headers: { 'Authorization': 'bearer ' + accessToken }
            })

            if (data) {
                setIsAuthenticated(true)
                setUser(data)
            }

        } catch (error) {
            console.log(error)
        }

    }

    const login = async (loginEmail, loginPassword) => {
        try {
            const { data } = await axios({
                method: 'post',
                url: `${host}/user/login`,
                data: {
                    email: loginEmail,
                    password: loginPassword
                }
            })

            localStorage.setItem('accessToken', data.accessToken)

        } catch (error) {
            throw error.response.data.messages
        }
    }

    const register = async ({ name, email, password }) => {
        try {
            const { data } = await axios({
                method: 'post',
                url: `${host}/user/register`,
                data: {
                    displayName: name,
                    email: email,
                    password: password
                }
            })

            if (data?.accessToken) {
                localStorage.setItem('accessToken', data.accessToken)
            }

            return data

        } catch (error) {
            throw error.response.data.messages
        }
    }

    useEffect(() => {
        authenticate()
    }, [])

    return (
        <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, login, register }}>
            {props.children}
        </UserContext.Provider>
    )
}
