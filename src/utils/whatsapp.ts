

const WHATSAPP_NUMBER = '254726894129';

export const openWhatsAppChat = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};

export const WHATSAPP_MESSAGES = {
  SERVICE_INQUIRY: (serviceName: string) => 
    `Hi Kevin! I'm interested in your ${serviceName} service. Could you provide more details?`,
  
  TRAINING_INQUIRY: (courseName: string) => 
    `Hi Kevin! I'd like to learn more about your ${courseName} course. When is the next session?`,
  
  GENERAL_INQUIRY: 'Hi Kevin! I found your portfolio and would like to discuss a potential project.',
  
  PROJECT_DISCUSSION: 'Hi Kevin! I have a project idea and would love to discuss it with you.',
  
  NEWSLETTER_SIGNUP: "Hi Kevin! I'd like to stay updated on TechieHub news and announcements.",
  
  COLLABORATION: 'Hi Kevin! I\'m interested in collaborating with TechieHub on a project.'
} as const;