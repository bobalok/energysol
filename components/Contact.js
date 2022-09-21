import React, { useState } from "react";
import axios from "axios";

import {
  CheckIcon,
  ChevronDoubleRightIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";

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
      .then((response) => {
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
          <span className='flex h-3 w-3 -m-1'>
            <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-3 w-3 bg-sky-500'></span>
          </span>
          <div className='grid grid-cols-1 gap-x-16 sm:gap-y-8 lg:grid-cols-5 '>
            <div className='sm:py-12 p-8 lg:col-span-2'>
              {/* <p className='mt-6 uppercase'>CONTACT US</p> */}

              <h1 className='text-3xl font-bold sm:text-5xl'>Send us a mail</h1>
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

            <div className='p-8 bg-white rounded-xl lg:p-12 lg:col-span-3'>
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
                    placeholder='Compose your mail or inquiry here'
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
                <div className='mt-4'>
                  <button
                    type='submit'
                    disabled={status.submitting}
                    className='inline-flex items-center justify-center w-full px-5 py-3 font-bold text-white bg-black rounded-lg sm:w-auto'
                  >
                    {!status.submitting ? (
                      !status.submitted ? (
                        <span className='font-bold inline-flex items-center'>
                          Submit
                          <ArrowNarrowRightIcon
                            className='w-5 h-5 ml-3 transition-transform transform group-hover:translate-x-3'
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
