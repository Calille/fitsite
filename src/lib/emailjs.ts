import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // You'll need to get this from EmailJS dashboard
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_xxxxxxx'; // Contact form template
const EMAILJS_TEMPLATE_ID_QUIZ = 'template_xxxxxxx'; // Quiz results template
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // Your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface QuizFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: 'will@coachwill.co.uk',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    console.log('Contact email sent successfully:', response);
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Contact email error:', error);
    return { success: false, message: 'Failed to send message. Please try again.' };
  }
};

export const sendQuizEmail = async (formData: QuizFormData): Promise<{ success: boolean; message: string }> => {
  try {
    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phoneNumber,
      q1: formData.q1,
      q2: formData.q2,
      q3: formData.q3,
      q4: formData.q4,
      q5: formData.q5,
      q6: formData.q6,
      q7: formData.q7,
      to_email: 'will@coachwill.co.uk',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_QUIZ,
      templateParams
    );

    console.log('Quiz email sent successfully:', response);
    return { success: true, message: 'Quiz results sent successfully!' };
  } catch (error) {
    console.error('Quiz email error:', error);
    return { success: false, message: 'Failed to send quiz results. Please try again.' };
  }
};
