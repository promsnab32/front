import { useCartStore } from '@/stores/cart'



export const useFormSender = () => {
  const cartStore = useCartStore()
  const sendToTelegram = async (formData: Record<string, string | number | null>, file?: File) => {
    const botToken = '8072338968:AAFZ1pHgsoe3UMPjgpuQT3Dvx2na5olBlwA'
    const chatId = '554855169'

    let message = `📝 Promsnab/форма заявки:\n\n`
    message += `👤 Имя: ${formData.name}\n`
    message += `📞 Телефон: ${formData.phone}\n`
    message += `📧 Email: ${formData.email}\n`
    if (formData.text) {
      message += `💬 Комментарий: ${formData.text}\n\n`
    }

    if (cartStore.cartList.length > 0) {
      message += `🛒 Корзина:\n`
      cartStore.cartList.forEach((item, index) => {
        message += `${index + 1}) ${item.name} (Артикул: ${item.article}) — ${item.count} шт.\n`
      })
    } else {
      message += `🛒 Корзина пуста\n`
    }

    const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    const sendDocumentUrl = `https://api.telegram.org/bot${botToken}/sendDocument`

    try {
      let response

      if (file) {
        const formDataFile = new FormData()
        formDataFile.append('chat_id', chatId)
        formDataFile.append('document', file)
        formDataFile.append('caption', message)

        response = await fetch(sendDocumentUrl, {
          method: 'POST',
          body: formDataFile,
        })
      } else {
        response = await fetch(sendMessageUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'Markdown' }),
        })
      }

      const result = await response.json()

      if (result.ok) {
        console.log('Сообщение отправлено в Telegram!')
      } else {
        console.error('Ошибка при отправке сообщения в Telegram:', result)
      }
    } catch (error) {
      console.error('Ошибка при отправке сообщения или файла в Telegram:', error)
    }
  }

  const sendToEmail = async (formData: Record<string, string | number | null>, file?: File) => {
    const mail = useMail()

    let message = `
      Имя: ${formData.name}\n
      Телефон: ${formData.phone}\n
      Email: ${formData.email}\n
      Комментарий: ${formData.text || 'Не указано'}\n\n
    `
    if (cartStore.cartList.length > 0) {
      message += `🛒 Корзина:\n`
      cartStore.cartList.forEach((item, index) => {
        message += `${index + 1}) ${item.name} (Артикул: ${item.article}) — ${item.count} шт.\n`
      })
    } else {
      message += `🛒 Корзина пуста\n`
    }

    const emailData: any = {
      from: 'd.kireenkov32rus@yandex.ru',
      to: 'd.kireenkov@yandex.ru',
      subject: 'Новая заявка с сайта',
      text: message,
    }

    if (file) {
      const fileBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          const base64String = reader.result?.toString().split(',')[1]
          resolve(base64String)
        }
        reader.onerror = (error) => reject(error)
      })
  
      emailData.attachments = [
        {
          filename: file.name,
          content: fileBase64,
          encoding: 'base64',
        },
      ]
    }

    try {
      await mail.send(emailData)
      console.log('Email отправлен!')
    } catch (error) {
      console.error('Ошибка при отправке email:', error)
    }
  }

  const sendForm = async (formData: Record<string, string | number | null>, file?: File) => {
    await sendToTelegram(formData, file)
    await sendToEmail(formData, file)
    cartStore.removeAll()
  }

  return sendForm
}
