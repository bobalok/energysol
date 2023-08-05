import React, { useState } from "react";
import axios from "axios";
import WhatsAppButtonGreenMedium from "../public/WhatsAppButtonGreenMedium.svg";

import {
  CheckIcon,
  ChevronDoubleRightIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

export default function Contact() {
  // mail functions goes here
  const form_id = process.env.NEXT_PUBLIC_FORM;
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/mzbwdeed",
      data: inputs,
    })
      .then((_response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <>
      <section
        id='contact'
        className='max-w-screen-xl px-4 mx-auto md:py-16 sm:px-6 lg:px-8 '
      >
        <div className=' rounded-xl shadow-xl border border-gray-200'>
          <div className='absolute -m-1'>
            <span className='flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-sky-500'></span>
            </span>
          </div>

          <div className='grid grid-cols-1 sm:gap-y-8 lg:grid-cols-5'>
            <div className='sm:py-12 p-8 lg:col-span-2 rounded-xl lg:rounded-r-none bg-contact-default bg-bg-size'>
              {/* <p className='mt-6 uppercase'>CONTACT US</p> */}

              <h1 className='text-3xl font-bold sm:text-5xl'>
                Send us a message
              </h1>
              <p className='max-w-xl text-lg mt-6'>
                We would love to hear more about your goals and how we can help
                you achieve them. If you have any questions about our business,
                please let us know. We&rsquo;ll do our best to respond as soon
                as possible.
              </p>
              <br />
              {/* <strong className='max-w-xl text-lg mt-6'>
                Please call, chat, e-mail or visit us using the information
                below. We’re here to help!
              </strong> */}
              <address className='mt-2 not-italic text-gray-700'>
                <strong>Head Office :</strong> Plot 16, Road 10, Suite SW-4,
                Gulshan-1, Dhaka-1212, Bangladesh.
              </address>

              <div className='mt-8'>
                {/* <span>Call</span>
                <br /> */}
                <a
                  // href=''
                  className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-700 to-sky-500'
                  href='tel:+8802222262118'
                >
                  {" "}
                  +8802 222262118{" "}
                </a>
              </div>
            </div>

            <div className='p-8 rounded-xl lg:rounded-r-xl lg:p-12 lg:col-span-3'>
              <form className='space-y-4' onSubmit={handleOnSubmit}>
                <div>
                  <label className='sr-only' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='w-full p-3 text-sm border border-gray-200 rounded-lg'
                    placeholder='Name'
                    type='text'
                    id='name'
                    required
                    onChange={handleOnChange}
                    value={inputs.name}
                  />
                </div>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  <div>
                    <label className='sr-only' htmlFor='email'>
                      Email
                    </label>
                    <input
                      className='w-full p-3 text-sm border border-gray-200 rounded-lg'
                      placeholder='Email address'
                      type='email'
                      id='email'
                      required
                      onChange={handleOnChange}
                      value={inputs.email}
                    />
                  </div>

                  <div>
                    <label className='sr-only' htmlFor='phone'>
                      Phone
                    </label>
                    <input
                      className='w-full p-3 text-sm border border-gray-200 rounded-lg'
                      placeholder='Phone Number'
                      type='tel'
                      id='phone'
                      required
                      onChange={handleOnChange}
                      value={inputs.phone}
                    />
                  </div>
                </div>
                {/* <div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-3 p-3 border border-gray-200 rounded-lg'>
                  <div className='flex'>
                    <input
                      id='option-1'
                      type='radio'
                      name='client'
                      value='A user'
                      className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
                      aria-labelledby='option-1'
                      aria-describedby='option-1'
                      required
                    />
                    <label
                      htmlFor='option-1'
                      className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      <span className='text-sm font-medium text-black'>
                        {" "}
                        A user{" "}
                      </span>
                    </label>
                  </div>

                  <div className='flex'>
                    <input
                      id='option-2'
                      type='radio'
                      name='client'
                      value='Not a user'
                      className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
                      aria-labelledby='option-2'
                      aria-describedby='option-2'
                    />
                    <label
                      htmlFor='option-2'
                      className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      <span className='text-sm font-medium text-black'>
                        {" "}
                        Not a user{" "}
                      </span>
                    </label>
                  </div>

                  <div className='flex'>
                    <input
                      id='option-3'
                      type='radio'
                      name='client'
                      value='Planning to switch'
                      className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
                      aria-labelledby='option-3'
                      aria-describedby='option-3'
                    />
                    <label
                      htmlFor='option-3'
                      className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      <span className='text-sm font-medium text-black'>
                        {" "}
                        Planning to switch{" "}
                      </span>
                    </label>
                  </div>
                </div> */}
                <div>
                  <label className='sr-only' htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    className='w-full p-3 text-sm border border-gray-200 rounded-lg'
                    placeholder='Compose your message or any inquiry here'
                    rows='8'
                    id='message'
                    required
                    onChange={handleOnChange}
                    value={inputs.message}
                  />
                </div>
                {/* <ReCAPTCHA
                  sitekey='6Lf9d8UhAAAAAKl6aMfJMcVHg8Mav6gz1IKwu3BF'
                  onChange={handleChange}
                /> */}
                <div className='mt-4 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4'>
                  <button
                    type='submit'
                    disabled={status.submitting}
                    className='inline-flex items-center group justify-center w-full px-5 py-3 font-bold text-white bg-black rounded sm:w-auto'
                  >
                    {!status.submitting ? (
                      !status.submitted ? (
                        <span className='font-bold inline-flex items-center'>
                          Submit
                          <ArrowNarrowRightIcon
                            className='w-5 h-5 ml-3 transition-transform transform group-hover:translate-x-2'
                            fill='currentColor'
                          />
                        </span>
                      ) : (
                        <span className='text-green-300 font-bold flex items-center'>
                          Submitted
                          <CheckIcon
                            className='w-5 h-5 ml-3'
                            fill='currentColor'
                          />
                        </span>
                      )
                    ) : (
                      <span className='font-bold flex items-center'>
                        Submitting...
                        <ChevronDoubleRightIcon className=' w-5 h-5 ml-3' />
                      </span>
                    )}

                    {/* <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 ml-3'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg> */}
                  </button>

                  <button
                    className='inline-flex items-center group justify-center w-full px-5 py-3 font-bold text-white bg-green-500 hover:bg-green-600 transition rounded sm:w-auto'
                    type='button'
                  >
                    <a
                      className='font-bold inline-flex items-center'
                      aria-label='Chat on WhatsApp'
                      href='https://wa.me/+8801711591070?text=Obtained%20your%20WhatsApp%20contact%20from%20the%20website.%20Are%20you%20free%20for%20a%20conversation%3F'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <svg
                        className='w-6 h-6 mr-2'
                        fill='currentColor'
                        viewBox='0 0 30 30'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </button>
                </div>
              </form>

              {status.info.error && (
                <div className='error'>Error: {status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && (
                <p>{status.info.msg}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
