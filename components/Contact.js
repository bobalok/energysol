import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  // const handleChange() => {

  // };
  // console.log(useForm);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <section
        id='contact'
        className='max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8 '
      >
        <div className=' rounded-xl shadow-xl border border-gray-200'>
          <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 '>
            <div className='lg:py-12 p-8 lg:col-span-2'>
              {/* <p className='mt-6 uppercase'>CONTACT US</p> */}
              <h1 className='text-3xl font-bold sm:text-5xl'>Send us a mail</h1>
              <p className='max-w-xl text-lg mt-6'>
                We would love to hear more about your goals and how we can help
                you achieve them. If you have any questions about our business,
                please let us know. We&rsquo;ll do our best to respond as soon
                as possible.
              </p>
              <br />
              <strong className='max-w-xl text-lg mt-6'>
                Please call, chat, e-mail or visit us using the information
                below. We’re here to help!
              </strong>

              <div className='mt-8'>
                <a
                  // href=''
                  className='text-2xl font-bold text-pink-600'
                  href='tel:+8802222262118'
                >
                  {" "}
                  +8802 222262118{" "}
                </a>

                <address className='mt-2 not-italic text-white'>
                  Registered Office : 105 S.R. Tower, 8th Floor, Uttara
                  Commercial Area, Sector-7, Uttara, Dhaka-1230.
                </address>
              </div>
            </div>

            <div className='p-8 bg-white rounded-xl lg:p-12 lg:col-span-3'>
              <form method='post' className='space-y-4' onSubmit={handleSubmit}>
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
                    />
                    <ValidationError
                      prefix='Email'
                      field='email'
                      errors={state.errors}
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
                  />
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                  />
                </div>
                {/* <ReCAPTCHA
                  sitekey=''
                  onChange={handleChange}
                /> */}
                <div className='mt-4'>
                  <button
                    type='submit'
                    disabled={state.submitting}
                    className='inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto'
                  >
                    <span className='font-bold text-lg'> Send Enquiry </span>

                    {/* <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 ml-3'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg> */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
