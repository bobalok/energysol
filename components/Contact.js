export default function Contact() {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }
  return (
    <>
      <section id='contact' className=' text-gray-600'>
        <div className='bg-hero-pattern bg-hero-size max-w-screen-xl px-4 md:py-16 pb-6 mx-auto sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
            <div className='lg:py-12 lg:col-span-2'>
              <p className='mt-6 uppercase'>CONTACT US</p>
              <h1 className='text-3xl font-bold sm:text-5xl'>
                Send us an email
              </h1>
              <p className='max-w-xl text-lg mt-6'>
                Your telecom services don’t take a break – and neither do we!
                We’re happy to be available 24/7 for any questions or concerns.
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

            <div className='p-8 bg-white rounded-lg drop-shadow-2xl lg:p-12 lg:col-span-3'>
              <form
                method='post'
                className='space-y-4'
                onSubmit={handleOnSubmit}
              >
                <div>
                  <label className='sr-only' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='w-full p-3 text-sm border border-gray-200 rounded-lg'
                    placeholder='Name*'
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
                      placeholder='Email address*'
                      type='email'
                      id='email'
                      required
                    />
                  </div>

                  <div>
                    <label className='sr-only' htmlFor='phone'>
                      Phone
                    </label>
                    <input
                      className='w-full p-3 text-sm border border-gray-200 rounded-lg'
                      placeholder='Phone Number*'
                      type='tel'
                      id='phone'
                      required
                    />
                  </div>
                </div>
                <div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-3 p-3 border border-gray-200 rounded-lg'>
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
                </div>

                <div>
                  <label className='sr-only' htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    className='w-full p-3 text-sm border border-gray-200 rounded-lg'
                    placeholder='Compose your inquiry here'
                    rows='8'
                    id='message'
                    required
                  ></textarea>
                </div>
                <div className='mt-4'>
                  <button
                    type='submit'
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
