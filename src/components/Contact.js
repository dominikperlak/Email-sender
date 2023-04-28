import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_87a40mg';
    const templateId = 'template_r4snhu6';
    const userId = '6m6SQKiS5ePAfQ363';

    const { user_name, user_email, subject, message, to_email } = e.target.elements;

    const emails = to_email.value.split(',').map((email) => email.trim());

    const emailParams = {
      to_email: emails.join(','),
      user_name: user_name.value,
      user_email: user_email.value,
      subject: subject.value,
      message: message.value,
    };

    emailjs.send(serviceId, templateId, emailParams, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section>
      <div className="container">
        <h2 className="--text-center">Contact Us</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control --card --flex-center --dir-column"
        >
          <input type="text" placeholder="Full Name" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="To Email (comma separated)" name="to_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit" className="--btn --primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
