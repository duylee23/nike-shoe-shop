import React from 'react'
import background from '../../assets/images/background.jpg';
import logo from '../../assets/images/logoNike.svg';
import jordanLogo from '../../assets/images/Jumpman_logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
      <div className='mt-[60px] border  w-full '  style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
          <section class="">
              <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                  <div class ="mt-4 flex flex-col justify-center items-center mb-6 text-2xl font-semibold text-gray-900 ">
                    <div className='flex mb-4'>
                      <img class="w-8 h-8 mr-2" src={logo} alt="logo" />
                      <img class="w-8 h-8 mr-2" src={jordanLogo} alt="logo" />
                    </div>
                      Nike, Just do it!
                  </div>
                      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                              Sign in to your account
                          </h1>
                          <form class="space-y-4 md:space-y-6" action="#">
                              <div>
                                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter your email " required="" />
                              </div>
                              <div>
                                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                  <input type="password" name="password" id="password" placeholder="Enter your password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                              </div>
                              <div class="flex items-center justify-between">
                                  <div class="flex items-start">
                                      <div class="flex items-center h-5">
                                          <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                      </div>
                                      <div class="ml-3 text-sm">
                                          <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                      </div>
                                  </div>
                                  <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                              </div>
                              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                  Don’t have an account yet? <Link to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                              </p>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Login