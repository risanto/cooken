import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/User'
import Nav from '../Nav'
import Alert from '../Alert'

const JoinLogin = (props) => {
    const { login, register, isAuthenticated } = useContext(UserContext)

    if (isAuthenticated) {
        props.history.push('/')
    }

    // ERROR MESSAGE
    const [errorMessages, setErrorMessages] = useState([])
    const [dismissAlert, setDismissAlert] = useState(false)


    // LOGIN
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const loginWithCookenAccount = () => {
        setJoinActive(false)
        setDismissAlert(true)
        setLoginEmail('cooken@dummy.acc')
        setLoginPassword('cooken123')
    }

    const handleLogin = () => {
        login(loginEmail, loginPassword)
            .then(_ => {
                props.history.push('/')
                window.location.reload()
            })
            .catch(errMessages => {
                setDismissAlert(false)
                setErrorMessages(errMessages?.slice(0, 1))
            })
    }


    // JOIN
    const [joinName, setJoinName] = useState('')
    const [joinEmail, setJoinEmail] = useState('')
    const [joinPassword, setJoinPassword] = useState('')
    const [joinPassword2, setJoinPassword2] = useState('')

    const handleJoin = () => {
        if (joinPassword !== joinPassword2) {
            setDismissAlert(false)
            
            const message = 'Please enter the same password and confirm password.'

            if (!errorMessages.includes(message)) {
                setErrorMessages([message])
            }
        } else {
            register({
                name: joinName, email: joinEmail, password: joinPassword
            })
            .then(_ => {
                props.history.push('/')
                window.location.reload()
            })
            .catch(errMessages => {
                setDismissAlert(false)
                setErrorMessages(errMessages.slice(0, 1))
            })
        }
    }


    // SWITCH JOIN/LOGIN
    const [joinActive, setJoinActive] = useState(true)

    const toggleJoinActive = (boolean) => {
        setJoinActive(boolean)
        setDismissAlert(true)

        if (boolean === true) {
            setLoginEmail('')
            setLoginPassword('')
        }
    }

    useEffect(() => {
        if (dismissAlert === true) {
            setErrorMessages([])
        }
    }, [dismissAlert])

    const activeH2Classnames = "cursor-pointer flex-1 inline-block py-1 text-base text-center text-red-500 border-b-2 border-red-500 bg-pink-50"

    const inactiveH2Classnames = "cursor-pointer flex-1 inline-block py-1 text-base text-center text-gray-500 border-b-2 bg-gray-50"

    return (
        <div
            style={{ backgroundImage: "url('/chef-celebration.png')" }}
            className="overflow-scroll h-screen bg-no-repeat bg-contain below-sm-500:bg-none bg-30% sm-500:bg-chef-celebration sm-500:bg-right sm-500:bg-indigo-10 relative"
        >
            <Nav showLogo={true} />

            <section className="flex flex-col w-full pb-10 bg-white sm-500:my-8 sm-500:rounded-lg sm-500:shadow-md sm-500:w-2/3 lg:w-1/3 sm-500:mx-auto">
                <div className="flex justify-around">
                    {/* Join / log in */}
                    <h2
                        className={
                            (joinActive ? activeH2Classnames : inactiveH2Classnames) + ' sm-500:rounded-tl-lg'
                        }
                        onClick={() => toggleJoinActive(true)}
                    >Join</h2>
                    <h2
                        className={
                            (joinActive ? inactiveH2Classnames : activeH2Classnames) + ' sm-500:rounded-tr-lg'
                        }
                        onClick={() => toggleJoinActive(false)}
                    >Log in</h2>
                </div>


                {/* Join */}
                <div className={(joinActive ? "" : "hidden ") + "flex flex-col px-10 pt-10"}>
                    <p className={"text-2xl text-center text-red-500"}>Welcome!</p>
                    <p className="mt-2 text-center xl:mx-16">We need a few details to create your account. After this, you'll be set up and ready to go.</p>
                    <div className="relative mt-8">
                        <label htmlFor="name" className="leading-7 text-gray-700">Name</label>
                        <input
                            value={joinName}
                            onChange={e => setJoinName(e.target.value)}
                            type="name" name="name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                    </div>
                    <div className="relative mt-4">
                        <label htmlFor="email" className="leading-7 text-gray-700">Email</label>
                        <input
                            value={joinEmail}
                            onChange={e => setJoinEmail(e.target.value)}
                            type="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                    </div>
                    <div className="relative mt-4">
                        <label htmlFor="email" className="leading-7 text-gray-700">Password</label>
                        <input
                            value={joinPassword}
                            onChange={e => setJoinPassword(e.target.value)}
                            type="password" name="password" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                    </div>
                    <div className="relative mt-4 mb-4">
                        <label htmlFor="email" className="leading-7 text-gray-700">Confirm password</label>
                        <input
                            value={joinPassword2}
                            onChange={e => setJoinPassword2(e.target.value)}
                            type="password" name="password" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                    </div>

                    {!!errorMessages.length && (
                        <Alert
                            classNames={"text-red-700 bg-red-100 border border-red-300"}
                            dismissAlert={dismissAlert}
                            setDismissAlert={setDismissAlert}
                            messages={errorMessages}
                        />
                    )}

                    <button
                        onClick={handleJoin}
                        className="px-6 py-2 mt-4 text-lg text-white bg-red-600 border-0 focus:outline-none bg-gradient-to-r from-pink-600 hover:from-pink-500 via-red-500 hover:via-red-400 to-red-600 hover:to-red-500 rounded-xl">Create account</button>

                    <p className="mt-4 text-center">Too lazy to make a new account? Just use <span
                        onClick={loginWithCookenAccount}
                        className="font-bold text-red-500 underline cursor-pointer"
                    >Cooken account</span> and get going.</p>
                </div>


                {/* Log in */}
                <div className={(joinActive ? "hidden " : "") + "flex flex-col px-10 pt-10"}>
                    <p className={"text-2xl text-center text-red-500"}>Welcome back!</p>
                    <p className="mt-2 text-center">Please log in with your account details below.</p>

                    {/* User inputs */}
                    <div className="relative mt-8">
                        <label htmlFor="email" className="leading-7 text-gray-700">Email</label>
                        <input
                            value={loginEmail}
                            onChange={e => setLoginEmail(e.target.value)}
                            type="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
                        />
                    </div>
                    <div className="relative mt-4 mb-4">
                        <label htmlFor="email" className="leading-7 text-gray-700">Password</label>
                        <input
                            value={loginPassword}
                            onChange={e => setLoginPassword(e.target.value)}
                            type="password" name="password" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
                        />
                    </div>

                    {!!errorMessages.length && (
                        <Alert
                            classNames={"text-red-700 bg-red-100 border border-red-300"}
                            dismissAlert={dismissAlert}
                            setDismissAlert={setDismissAlert}
                            messages={errorMessages}
                        />
                    )}

                    <button
                        onClick={handleLogin}
                        className="px-6 py-2 mt-4 text-lg text-white bg-red-600 border-0 focus:outline-none bg-gradient-to-r from-pink-600 hover:from-pink-500 via-red-500 hover:via-red-400 to-red-600 hover:to-red-500 rounded-xl"
                    >Log in</button>

                    <p className="mt-4 text-center">Don't have an account of your own? Just use <span
                        onClick={loginWithCookenAccount}
                        className="font-bold text-red-500 underline cursor-pointer"
                    >Cooken account</span> and get going.</p>
                </div>

            </section>

        </div>
    )
}

export default JoinLogin
