import { FloatingWhatsApp } from "@digicroz/react-floating-whatsapp"
import { whatsAppConfig } from "../../../config/site"


export const WhatsAppButton: React.FC = () => {
    const { whatsAppNumber, businessName, statusMessage, chatMessage, label } = whatsAppConfig

  return (
    <FloatingWhatsApp
      phoneNumber={whatsAppNumber}
      accountName={businessName}
      statusMessage={statusMessage}
      chatMessage={chatMessage}
      placeholder={label}
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  )
}

export default WhatsAppButton