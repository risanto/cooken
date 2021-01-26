import React from 'react'
import Home from './components/views/Home'
import { RecipeProvider } from './contexts/Recipe'

const App = () => {
    return (
        <RecipeProvider>
            <Home />
        </RecipeProvider>
    )
}

export default App
