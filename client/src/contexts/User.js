import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import host from '../host'

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({})
    const [savedRecipes, setSavedRecipes] = useState([])

    const updateUserIngredients = async (ingredients) => {
        try {
            const url = `${host}/user/ingredients?ingredientsStr=${ingredients.join(',')}`

            const { data } = await axios({
                method: 'patch', url,
                headers: { 'Authorization': 'bearer ' + user.accessToken }
            })

            return data

        } catch (error) {
            throw error.message
        }
    }

    const removeFromSavedRecipes = async (id) => {
        try {
            const { data } = await axios({
                method: 'delete',
                url: `${host}/savedRecipes/${+id}`,
                headers: { 'Authorization': 'bearer ' + user.accessToken }
            })

            return data
            
        } catch (error) {
            console.log(error)
        }
    }

    const saveRecipe = async (recipeId, imageSrc, title) => {
        try {
            const accessToken = localStorage.getItem('accessToken')

            let query = `recipeId=${recipeId}&imageSrc=${imageSrc}&title=${title}`
    
            const { data } = await axios({
                method: 'post',
                url: `${host}/savedRecipes?${query}`,
                headers: { 'Authorization': 'bearer ' + accessToken }
            })

            return data

        } catch (error) {
            console.log(error)
        }
    }

    const fetchSavedRecipes = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken')
    
            const { data } = await axios({
                method: 'get',
                url: `${host}/savedRecipes`,
                headers: { 'Authorization': 'bearer ' + accessToken }
            })

            setSavedRecipes(data)

        } catch (error) {
            console.log(error)
        }        
    }

    const authenticate = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken')

            const { data } = await axios({
                method: 'get',
                url: `${host}/user`,
                headers: { 'Authorization': 'bearer ' + accessToken }
            })

            data.accessToken = accessToken

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
        fetchSavedRecipes()
    }, [])

    return (
        <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, login, register, saveRecipe, savedRecipes, fetchSavedRecipes, removeFromSavedRecipes, updateUserIngredients }}>
            {props.children}
        </UserContext.Provider>
    )
}
