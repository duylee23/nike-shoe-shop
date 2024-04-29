import React from 'react'
import logo from '../../assets/images/logoNike.svg';
import jordanLogo from '../../assets/images/Jumpman_logo.png';
import background2 from '../../assets/images/background2.jpg';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='mt-[60px]' style={{ backgroundImage: `url(${background2})`, backgroundSize: 'cover' }}>
      <section class="">
        <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div class="mt-4 flex flex-col justify-center  items-center mb-6 text-2xl font-semibold text-gray-900 ">
              <div className='flex mb-4'>
                <img class="w-8 h-8 mr-2" src={logo} alt="logo" />
                <img class="w-8 h-8 mr-2" src={jordanLogo} alt="logo" />
              </div>
              Nike, Just do it!
            </div>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter your email" required="" />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                  <input type="password" name="password" id="password" placeholder="Enter password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                </div>
                <div>
                  <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                  <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="Confirm password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 " required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-light text-gray-500 ">I accept the <a class="font-medium text-primary-600 hover:underline " href="#">Terms and Conditions</a></label>
                  </div>
                </div>
                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <Link to='/login' class="font-medium text-primary-600 hover:underline ">Login here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register