import React from 'react'
import GoogleLogin from 'react-google-login'
import cookie from 'js-cookie'
import Router from 'next/router'


async function sucess(response)
{
    const profile = response.profileObj
    const jwt = process.env.JWT
    cookie.set("username",profile.name)
    Router.push("/")


}
const login = () => {
  return (
    <div>
        <GoogleLogin clientId='639008653452-vuu6j37corugvpv5om0rscnnghsh5bi8.apps.googleusercontent.com' onSuccess={sucess}></GoogleLogin>
    </div>
  )
}

export default login