import { WindowControls } from '#components'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import { Mail } from 'lucide-react/dist/esm/icons'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'

const Contact = () => {
  const isMaximized = useWindowStore(state => state.windows.contact?.isMaximized);
  const email = 'swastik15.sharma.work@gmail.com'
  const [showModal, setShowModal] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [result, setResult] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submissionResults, setSubmissionResults] = useState({ key1: null, key2: null })

  // react-hook-form
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Web3Forms setup - send to both emails
  const accessKey1 = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_1 || '18536a8d-1f17-4f02-97b1-e5cf2b45e4fb'
  const accessKey2 = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_2 || '3632924f-f67c-4571-883a-ae15e8c4ed16'

  // Function to submit to both endpoints
  const submitToBothEndpoints = async (formData) => {
    setSubmitting(true)
    setResult('正在发送消息...')
    
    const submitToEndpoint = async (accessKey, keyName) => {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            from_name: 'macOS 作品集 – 联系',
            subject: '来自 macOS 作品集的新联系消息',
            ...formData
          })
        })
        
        const result = await response.json()
        return { success: response.ok, message: result.message, keyName }
      } catch (error) {
        return { success: false, message: error.message, keyName }
      }
    }

    // 同时提交到两个端点
    const [result1, result2] = await Promise.all([
      submitToEndpoint(accessKey1, 'primary'),
      submitToEndpoint(accessKey2, 'secondary')
    ])

    setSubmissionResults({ key1: result1, key2: result2 })

    // 检查结果
    const bothSuccessful = result1.success && result2.success
    const oneSuccessful = result1.success || result2.success

    if (bothSuccessful) {
      setIsSuccess(true)
      setResult('消息已成功发送到两个邮箱地址！')
      reset()
    } else if (oneSuccessful) {
      setIsSuccess(true)
      setResult(`消息已成功发送到 ${result1.success ? '主要' : '次要'} 邮箱地址。 ${!result1.success ? result1.message : result2.message}`)
      reset()
    } else {
      setIsSuccess(false)
      setResult(`发送消息失败。主要邮箱：${result1.message}，次要邮箱：${result2.message}`)
    }

    setSubmitting(false)
  }

  useEffect(() => {
    if (isSuccess && showModal) {
      const t = setTimeout(() => setShowModal(false), 1800)
      return () => clearTimeout(t)
    }
  }, [isSuccess, showModal])
  
  return (
    <>
      <div id='window-header' className='flex items-center justify-between window-drag-handle'>
        <WindowControls target="contact" />
        <h2 className='flex-1 text-center'>联系我</h2>
        <a
          href={`mailto:${email}`}
          title={`Email: ${email}`}
          className='p-2 hover:bg-gray-200 rounded-md transition-colors'
        >
          <Mail size={17} />
        </a>
      </div>
      <div className='p-5 space-y-5'>
        <img
          src='/images/swastik_2.jpeg'
          alt='Swastik'
          loading='lazy'
          className={clsx(
            'object-cover object-top rounded-xl',
            isMaximized ? 'w-60 h-40' : 'w-30 h-20'
          )}
        />
        <h3>
          让我们联系
        </h3>
        <p>
          开放工作和合作。如果您需要构建什么，请写信给我。
        </p>
        <p>
          swastik15.sharma.work@gmail.com
        </p>
        <ul>
          {socials.map(({id, bg, link, icon, text}) => (
            <li key={id} style={{backgroundColor: bg}}>
              <a 
                href={link} 
                target='_blank' 
                rel='noopener noreferrer'
                title={text}
              >
                <img
                  src={icon}
                  alt={text}
                  loading='lazy'
                  className='size-5'
                />
                <p>
                  {text}
                </p>
              </a>
            </li>
          ))}
          {/* Contact form trigger as an extra social item */}
          <li key="contact-form" style={{ backgroundColor: '#000000' }}>
            <a
              href="#contact-form"
              title="Contact Form"
              onClick={(e) => {
                e.preventDefault()
                setIsSuccess(false)
                setResult('')
                setShowModal(true)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setIsSuccess(false)
                  setResult('')
                  setShowModal(true)
                }
              }}
              role="button"
              tabIndex={0}
            >
              <Mail className='size-5 text-white' />
              <p className='text-white'>Contact Form</p>
            </a>
          </li>
        </ul>
      </div>

      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div
            className='absolute inset-0 bg-black/50 backdrop-blur-[2px]'
            onClick={() => setShowModal(false)}
          />
          <div className='relative z-10 w-[min(92vw,520px)] rounded-xl border border-gray-200 bg-white shadow-2xl'>
            <div className='flex items-center justify-between border-b px-5 py-3'>
              <div className='flex items-center gap-2'>
                <Mail size={18} />
                <h3 className='text-base font-semibold'>给我发送消息</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className='rounded-md p-1.5 text-gray-500 hover:bg-gray-100'
                aria-label='Close'
              >
                ✕
              </button>
            </div>

            <form
              className='p-5 space-y-4'
              onSubmit={handleSubmit((data) => {
                submitToBothEndpoints(data)
              })}
            >
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='space-y-1 sm:col-span-1'>
                  <label htmlFor="contact-name" className='text-sm text-gray-700'>姓名</label>
                  <input
                    id="contact-name"
                    type='text'
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400'
                    placeholder='您的姓名'
                    autoComplete="name"
                    {...register('name', { required: '姓名是必填项' })}
                  />
                  {errors.name && (
                    <p className='text-xs text-red-600'>{errors.name.message}</p>
                  )}
                </div>
                <div className='space-y-1 sm:col-span-1'>
                  <label htmlFor="contact-email" className='text-sm text-gray-700'>邮箱</label>
                  <input
                    id="contact-email"
                    type='email'
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400'
                    placeholder='您的邮箱地址'
                    autoComplete="email"
                    {...register('email', {
                      required: '邮箱是必填项',
                      pattern: {
                        value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
                        message: '请输入有效的邮箱地址'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className='text-xs text-red-600'>{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className='space-y-1'>
                <label htmlFor="contact-message" className='text-sm text-gray-700'>消息</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  className='w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400'
                  placeholder="您有什么想法？"
                  autoComplete="off"
                  {...register('message', { required: '消息是必填项', minLength: { value: 10, message: '请至少输入10个字符' } })}
                />
                {errors.message && (
                  <p className='text-xs text-red-600'>{errors.message.message}</p>
                )}
              </div>

              {/* Hidden text honeypot field */}
              <input
                type="text"
                id="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                {...register('botcheck')}
              />

              {result && (
                <div className={`rounded-md border px-3 py-2 text-sm ${isSuccess ? 'border-green-300 bg-green-50 text-green-700' : 'border-red-300 bg-red-50 text-red-700'}`}>
                  {result}
                </div>
              )}

              <div className='flex items-center justify-between pt-1'>
                <button
                  type='button'
                  onClick={() => setShowModal(false)}
                  className='rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50'
                >
                  取消
                </button>
                <button
                  type='submit'
                  disabled={submitting}
                  className='inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60'
                >
                  {submitting && (
                    <span className='inline-block size-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent' />
                  )}
                  发送消息
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export { Contact }
export default ContactWindow;
