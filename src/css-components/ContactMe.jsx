import "./ContactMe.css";

const ContactMe = () => (
  <a
    href={`mailto:info@jawoonkim.me`}
    className={`staat
      px-8 py-3 shadow`}
  >
    <i></i>
    <div className="flex flex-col items-center neon-text">
      <p className="text-4xl leading-7">Contact Me</p>
      <p className="mont text-xs text-gray-200 tracking-widest">
        info@jawoonkim.me
      </p>
    </div>
  </a>
);

export default ContactMe;
