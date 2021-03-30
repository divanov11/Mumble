import React from 'react'
import '../Css/login.css';
import screenshot from '../Images/screenshot.PNG'

function LoginPage() {
    return (
        <div id="login-page-container">
            <div id="left-column">
                <div id="left-column-content">
                    <h1 id="headline">A place for developers to</h1>
                    <p id="subheadline">Share Projects - Ask Questions - Have Discussions - Write Articles</p>
                    <img alt="img-description" id="screenshot" src={screenshot} />
                    <p><small>An open source project. For the community, by the community</small></p>
                </div>

            </div>

            <div id="right-column">

                <div id="form-wrapper">
                    <h1 id="title">Mumble</h1>
                    <form action="#" class="form">

                        <div class="form__field">
                            <label for="formInput#email">Email: </label>
                            <input
                                class="input input--email"
                                id="formInput#email"
                                type="email"
                                name="email"
                                placeholder="e.g. user@domain.com"
                            />
                        </div>

                        <div class="form__field">
                            <label for="formInput#password">Password: </label>
                            <input
                                class="input input--password"
                                id="formInput#passowrd"
                                type="password"
                                name="password"
                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                            />
                        </div>


                        <input className="submit" type="submit" value="Sign In" />
                    </form>
                    <div id="bottom-content">

                        <p>Already have an account? <a href="#">Register</a></p>
                        <p><a href="#">Forgot Password?</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
