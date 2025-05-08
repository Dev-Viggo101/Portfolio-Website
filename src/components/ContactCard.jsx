import phone from '../assets/call.png'
import gmail from '../assets/email.png'
import whatsapp from '../assets/whats app.png'
import { useState } from 'react'

function ContactCard() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Message sent: ${fullname}`)
    setFullname('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <div className="bg-gray-400 dark:bg-white bg-opacity-15 rounded-md w-11/12 md:w-10/12 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      
      {/* Left Contact Info */}
      <div className="bg-white dark:bg-black dark:text-white rounded-xl shadow-gray-400 shadow-sm p-6 flex flex-col items-center">
        <h2 className="text-2xl text-center mb-10">Get In Touch</h2>

        <div className='flex flex-col gap-6'>

          <div className='flex items-center gap-4'>
            <img className='w-6 h-6 sm:w-8 sm:h-8 dark:bg-white' src={gmail} alt="Gmail" />
            <p className='text-sm sm:text-lg'>juliesviggo04@gmail.com</p>
          </div>

          <div className='flex items-center gap-4'>
            <img className='w-6 h-6 sm:w-8 sm:h-8 rounded-2xl dark:bg-white' src={phone} alt="Phone" />
            <p className='text-sm sm:text-lg'>+27 76 268 9174</p>
          </div>

          <div className='flex items-center gap-4'>
            <img className='w-6 h-6 sm:w-8 sm:h-8 rounded-2xl dark:bg-white' src={whatsapp} alt="WhatsApp" />
            <p className='text-sm sm:text-lg'>+27 76 268 9174</p>
          </div>

        </div>
      </div>

      {/* Right Contact Form */}
      <div className='bg-white dark:bg-black dark:text-white rounded-xl shadow-gray-400 shadow-sm p-6'>
        <h2 className="text-2xl text-center mb-6">Message Me</h2>

        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>

          <input
            type='text'
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder='Fullname...'
            className='border border-gray-300 rounded-md p-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-purple-700'
          />

          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email...'
            className='border border-gray-300 rounded-md p-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-purple-700'
          />

          <input
            type='text'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder='Subject...'
            className='border border-gray-300 rounded-md p-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-purple-700'
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Message...'
            className='border border-gray-300 rounded-md p-2 w-full md:w-80 h-32 resize-y focus:outline-none focus:ring-2 focus:ring-purple-700'
          />

          <button
            type='submit'
            className='bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 ring-2 ring-purple-400'
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}

export default ContactCard
