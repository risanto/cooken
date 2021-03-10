import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import Home from './components/views/Home'
import Recipe from './components/views/Recipe'
import RecipeSearchResult from './components/views/RecipeSearchResult'
import JoinLogin from './components/views/JoinLogin'
import MyIngredients from './components/views/MyIngredients'
import SavedRecipes from './components/views/SavedRecipes'

import { RecipeProvider } from './contexts/Recipe'
import { UserProvider } from './contexts/User'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
            <ToastContainer/>
            <UserProvider>
                <RecipeProvider>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/recipes/search/:page" exact component={RecipeSearchResult} />
                        <Route path="/recipes/:id" exact component={Recipe} />
                        <Route path="/joinLogin" exact component={JoinLogin} />
                        <Route path="/myIngredients" exact component={MyIngredients} />
                        <Route path="/savedRecipes" exact component={SavedRecipes} />
                    </Switch>
                </RecipeProvider>
            </UserProvider>
        </>
    )
}

export default App
