import React, { createContext, useEffect, useState, useCallback } from "react";
import axios from 'axios'
import host from '../host'

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({})
    const [savedRecipes, setSavedRecipes] = useState([])

    const getAccessToken = () => {
        return localStorage.getItem('accessToken')
    }

    const removeAccessToken = () => {
        return localStorage.removeItem('accessToken')
    }

    const findByIngredients = async(ingredients) => {
        try {
            const ingredientsStr = ingredients.length ? ingredients.join(',') : ''
            const url = `${host}/recipes/findByIngredients?q=${ingredientsStr}`

            const { data } = await axios({
                method: 'get', url,
                headers: { 'Authorization': 'bearer ' + getAccessToken() }
            })
            return data

        } catch (error) {
            console.log('ERROR', error.response.data)
            throw error.message
        }
    }

    const updateUserIngredients = async (ingredients) => {
        try {
            const ingredientsStr = ingredients.length ? ingredients.join(',') : ''
            const url = `${host}/user/ingredients?ingredientsStr=${ingredientsStr}`

            const { data } = await axios({
                method: 'patch', url,
                headers: { 'Authorization': 'bearer ' + getAccessToken() }
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
                headers: { 'Authorization': 'bearer ' + getAccessToken() }
            })

            return data

        } catch (error) {
            console.log(error)
        }
    }

    const saveRecipe = async (recipeId, imageSrc, title) => {
        try {
            let query = `recipeId=${recipeId}&imageSrc=${imageSrc}&title=${title}`

            const { data } = await axios({
                method: 'post',
                url: `${host}/savedRecipes?${query}`,
                headers: { 'Authorization': 'bearer ' + getAccessToken() }
            })

            return data

        } catch (error) {
            console.log(error)
        }
    }

    const fetchSavedRecipes = useCallback(async () => {
        try {
            const { data } = await axios({
                method: 'get',
                url: `${host}/savedRecipes`,
                headers: { 'Authorization': 'bearer ' + getAccessToken() }
            })

            setSavedRecipes(data)

        } catch (error) {
            console.log(error)
        }
    }, [])

    const authenticate = useCallback(async () => {
        try {
            const { data } = await axios({
                method: 'get',
                url: `${host}/user`,
                headers: { 'Authorization': 'bearer ' + getAccessToken() }
            })

            data.accessToken = getAccessToken()

            if (data) {
                setIsAuthenticated(true)
                setUser(data)
            }
            return data

        } catch (error) {
            console.log(error)
        }
    }, [])

    // PUBLIC ROUTES (LOGIN/REGISTRATION)

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
        if (getAccessToken()) {
            authenticate()
            fetchSavedRecipes()
        }
    }, [authenticate, fetchSavedRecipes])

    return (
        <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, login, register, saveRecipe, savedRecipes, fetchSavedRecipes, removeFromSavedRecipes, updateUserIngredients, authenticate, findByIngredients, removeAccessToken, getAccessToken }}>
            {props.children}
        </UserContext.Provider>
    )
}
