import React, { lazy, Suspense } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { RecipeProvider } from './contexts/Recipe'
import { UserProvider } from './contexts/User'
import { Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./components/views/Home'))
const Recipe = lazy(() => import('./components/views/Recipe'))
const RecipeSearchResult = lazy(() => import('./components/views/RecipeSearchResult'))
const JoinLogin = lazy(() => import('./components/views/JoinLogin'))
const MyIngredients = lazy(() => import('./components/views/MyIngredients'))
const SavedRecipes = lazy(() => import('./components/views/SavedRecipes'))
const About = lazy(() => import('./components/views/About'))
const Error = lazy(() => import('./components/views/Error'))
const Footer = lazy(() => import('./components/Footer'))

const App = () => {
    return (
        <div className="flex flex-col h-screen">
            <ToastContainer />
            <UserProvider>
                <RecipeProvider>
                    <ScrollToTop>
                        <Suspense fallback={<h1 className="text-center">...</h1>}>
                            <Switch>
                                <Route path="/error/:message" exact component={Error} />
                                <Route path="/" exact component={Home} />
                                <Route path="/about" exact component={About} />
                                <Route path="/recipes/search/:page" exact component={RecipeSearchResult} />
                                <Route path="/recipes/:id" exact component={Recipe} />
                                <Route path="/joinLogin" exact component={JoinLogin} />
                                <Route path="/myIngredients" exact component={MyIngredients} />
                                <Route path="/savedRecipes" exact component={SavedRecipes} />
                            </Switch>
                            <Footer/>
                        </Suspense>
                    </ScrollToTop>
                </RecipeProvider>
            </UserProvider>
        </div>
    )
}

export default App
