export const useTelegramSender = () => {
  const sendToTelegram = async (formData: Record<string, string | number | null>, file?: File) => {
    const botToken = '8072338968:AAFZ1pHgsoe3UMPjgpuQT3Dvx2na5olBlwA'
    const chatId = '1238935553'
    const cartStore = useCartStore()
    console.log('Bot Token:', botToken)
    console.log('Chat ID:', chatId)

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
        cartStore.removeAll()
      }
    } catch (error) {
      console.error('Ошибка при отправке сообщения или файла:', error)
    }
  }

  return sendToTelegram
}
