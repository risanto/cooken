import React from 'react'
import Home from './components/views/Home'
import { RecipeProvider } from './contexts/Recipe'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <RecipeProvider>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </RecipeProvider>
        </Router>
    )
}

export default App
